"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  type ReactNode,
} from "react";
import { buildCartLine, MAX_CART_QUANTITY, withCartLineQuantity } from "@/lib/cart";
import {
  loadCartStorage,
  persistCartStorage,
} from "@/lib/cart-storage";
import { calculateCartSubtotal } from "@/lib/pricing";
import type { CartLine, Product } from "@/types/ordering";

type CartState = Readonly<{
  lines: readonly CartLine[];
  hydrated: boolean;
}>;

type CartAction =
  | Readonly<{ type: "hydrate"; lines: readonly CartLine[] }>
  | Readonly<{ type: "add"; line: CartLine }>
  | Readonly<{ type: "replace"; originalIdentity: string; line: CartLine }>
  | Readonly<{ type: "set-quantity"; identity: string; quantity: number }>
  | Readonly<{ type: "remove"; identity: string }>
  | Readonly<{ type: "clear" }>;

function mergeLine(lines: readonly CartLine[], nextLine: CartLine) {
  const existing = lines.find((line) => line.identity === nextLine.identity);
  if (!existing) return [...lines, nextLine];

  const quantity = Math.min(
    MAX_CART_QUANTITY,
    existing.quantity + nextLine.quantity,
  );
  return lines.map((line) =>
    line.identity === nextLine.identity
      ? withCartLineQuantity(line, quantity)
      : line,
  );
}

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "hydrate":
      return { lines: action.lines, hydrated: true };
    case "add":
      return { ...state, lines: mergeLine(state.lines, action.line) };
    case "replace": {
      const withoutOriginal = state.lines.filter(
        (line) => line.identity !== action.originalIdentity,
      );
      return { ...state, lines: mergeLine(withoutOriginal, action.line) };
    }
    case "set-quantity":
      return {
        ...state,
        lines: state.lines.map((line) =>
          line.identity === action.identity
            ? withCartLineQuantity(line, action.quantity)
            : line,
        ),
      };
    case "remove":
      return {
        ...state,
        lines: state.lines.filter((line) => line.identity !== action.identity),
      };
    case "clear":
      return { ...state, lines: [] };
  }
}

type CartContextValue = Readonly<{
  lines: readonly CartLine[];
  hydrated: boolean;
  totalQuantity: number;
  subtotal: number;
  addLine: (line: CartLine) => void;
  replaceLine: (originalIdentity: string, line: CartLine) => void;
  quickAddProduct: (product: Product) => boolean;
  increaseQuantity: (identity: string) => void;
  decreaseQuantity: (identity: string) => void;
  setQuantity: (identity: string, quantity: number) => void;
  removeLine: (identity: string) => void;
  clearCart: () => void;
  getLine: (identity: string) => CartLine | undefined;
}>;

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, {
    lines: [],
    hydrated: false,
  });

  useEffect(() => {
    const lines = loadCartStorage(window.localStorage);
    dispatch({ type: "hydrate", lines });
  }, []);

  useEffect(() => {
    if (!state.hydrated) return;
    persistCartStorage(window.localStorage, state.lines);
  }, [state.hydrated, state.lines]);

  const addLine = useCallback((line: CartLine) => {
    dispatch({ type: "add", line });
  }, []);

  const replaceLine = useCallback(
    (originalIdentity: string, line: CartLine) => {
      dispatch({ type: "replace", originalIdentity, line });
    },
    [],
  );

  const quickAddProduct = useCallback((product: Product) => {
    if (
      !product.available ||
      !product.quickAddEligible ||
      product.optionGroups.some((group) => group.minSelections > 0)
    ) {
      return false;
    }
    dispatch({
      type: "add",
      line: buildCartLine({ product, selectedOptions: [], quantity: 1 }),
    });
    return true;
  }, []);

  const setQuantity = useCallback((identity: string, quantity: number) => {
    dispatch({ type: "set-quantity", identity, quantity });
  }, []);

  const removeLine = useCallback((identity: string) => {
    dispatch({ type: "remove", identity });
  }, []);

  const clearCart = useCallback(() => dispatch({ type: "clear" }), []);

  const totalQuantity = state.lines.reduce(
    (total, line) => total + line.quantity,
    0,
  );
  const subtotal = calculateCartSubtotal(state.lines);

  const value = useMemo<CartContextValue>(
    () => ({
      lines: state.lines,
      hydrated: state.hydrated,
      totalQuantity,
      subtotal,
      addLine,
      replaceLine,
      quickAddProduct,
      increaseQuantity: (identity) => {
        const line = state.lines.find((entry) => entry.identity === identity);
        if (line) setQuantity(identity, line.quantity + 1);
      },
      decreaseQuantity: (identity) => {
        const line = state.lines.find((entry) => entry.identity === identity);
        if (line) setQuantity(identity, line.quantity - 1);
      },
      setQuantity,
      removeLine,
      clearCart,
      getLine: (identity) =>
        state.lines.find((line) => line.identity === identity),
    }),
    [
      addLine,
      clearCart,
      quickAddProduct,
      removeLine,
      replaceLine,
      setQuantity,
      state.hydrated,
      state.lines,
      subtotal,
      totalQuantity,
    ],
  );

  return (
    <CartContext.Provider value={value}>
      {children}
      <span className="sr-only" role="status" aria-live="polite" aria-atomic="true">
        {state.hydrated
          ? `Cart has ${totalQuantity} ${totalQuantity === 1 ? "item" : "items"}.`
          : ""}
      </span>
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider.");
  return context;
}
