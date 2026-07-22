import type { ReactNode } from "react";
import { DesktopHeader } from "@/components/layout/desktop-header";
import { MobileBottomNav } from "@/components/layout/mobile-bottom-nav";
import { MobileHeader } from "@/components/layout/mobile-header";
import { cn } from "@/lib/styles";

type PageShellProps = {
  children: ReactNode;
  activeNav?: "home" | "menu" | "deals" | "cart";
  showMobileNav?: boolean;
  mainClassName?: string;
};

export function PageShell({
  children,
  activeNav = "home",
  showMobileNav = true,
  mainClassName,
}: PageShellProps) {
  return (
    <div id="top" className="min-h-screen">
      <MobileHeader />
      <DesktopHeader active={activeNav} />
      <main
        className={cn(showMobileNav ? "pb-24 md:pb-0" : "pb-0", mainClassName)}
      >
        {children}
      </main>
      {showMobileNav && <MobileBottomNav active={activeNav} />}
    </div>
  );
}
