"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function LandingBg({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const html = document.documentElement;
    if (pathname === "/") {
      html.classList.add("landing-bg");
    } else {
      html.classList.remove("landing-bg");
    }
    return () => html.classList.remove("landing-bg");
  }, [pathname]);

  return <>{children}</>;
}
