import {
  forwardRef,
  useId,
  type InputHTMLAttributes,
  type TextareaHTMLAttributes,
} from "react";
import { cn } from "@/lib/styles";

type SharedFieldProps = {
  label: string;
  hint?: string;
  error?: string;
};

type InputFieldProps = SharedFieldProps & InputHTMLAttributes<HTMLInputElement>;

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  function InputField({ label, hint, error, className, id, ...props }, ref) {
    const generatedId = useId();
    const fieldId = id ?? generatedId;
    const descriptionId = `${fieldId}-description`;

    return (
      <label htmlFor={fieldId} className="grid gap-2">
        <span className="text-sm font-bold text-text-primary">{label}</span>
        <input
          ref={ref}
          id={fieldId}
          aria-invalid={Boolean(error)}
          aria-describedby={hint || error ? descriptionId : undefined}
          className={cn(
            "h-12 w-full rounded-2xl border bg-surface-input px-4 text-sm text-text-primary placeholder:text-text-tertiary transition hover:border-border-strong focus:border-brand focus:outline-none",
            error ? "border-danger" : "border-border-subtle",
            className,
          )}
          {...props}
        />
        {(hint || error) && (
          <span
            id={descriptionId}
            role={error ? "alert" : undefined}
            className={cn(
              "text-xs leading-5",
              error ? "text-[#ff9b90]" : "text-text-tertiary",
            )}
          >
            {error ?? hint}
          </span>
        )}
      </label>
    );
  },
);

type TextareaFieldProps = SharedFieldProps &
  TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextareaField = forwardRef<HTMLTextAreaElement, TextareaFieldProps>(
  function TextareaField({ label, hint, error, className, id, ...props }, ref) {
    const generatedId = useId();
    const fieldId = id ?? generatedId;
    const descriptionId = `${fieldId}-description`;

    return (
      <label htmlFor={fieldId} className="grid gap-2">
        <span className="text-sm font-bold text-text-primary">{label}</span>
        <textarea
          ref={ref}
          id={fieldId}
          aria-invalid={Boolean(error)}
          aria-describedby={hint || error ? descriptionId : undefined}
          className={cn(
            "min-h-28 w-full resize-y rounded-2xl border bg-surface-input px-4 py-3 text-sm leading-6 text-text-primary placeholder:text-text-tertiary transition hover:border-border-strong focus:border-brand focus:outline-none",
            error ? "border-danger" : "border-border-subtle",
            className,
          )}
          {...props}
        />
        {(hint || error) && (
          <span
            id={descriptionId}
            role={error ? "alert" : undefined}
            className={cn(
              "text-xs leading-5",
              error ? "text-[#ff9b90]" : "text-text-tertiary",
            )}
          >
            {error ?? hint}
          </span>
        )}
      </label>
    );
  },
);
