"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function LandingBg({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (pathname === "/") {
      html.classList.add("landing-bg");

      if (isMobile) {
        body.style.backgroundImage = "url('/hero-fixed-bg.png')";
        body.style.backgroundSize = "cover";
        body.style.backgroundPosition = "center";
        body.style.backgroundRepeat = "no-repeat";
        body.style.backgroundAttachment = "scroll";
        body.style.backgroundColor = "#0F382C";
      } else {
        body.style.backgroundImage =
          "url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1400&auto=format&fit=crop'), url('/hero-fixed-bg.png')";
        body.style.backgroundSize = "50% auto, 50% 100%";
        body.style.backgroundPosition = "left center, right center";
        body.style.backgroundRepeat = "no-repeat, no-repeat";
        body.style.backgroundAttachment = "fixed, fixed";
        body.style.backgroundColor = "#0F382C";
      }
    } else {
      html.classList.remove("landing-bg");
      body.style.backgroundImage = "";
      body.style.backgroundSize = "";
      body.style.backgroundPosition = "";
      body.style.backgroundRepeat = "";
      body.style.backgroundAttachment = "";
      body.style.backgroundColor = "";
    }

    return () => {
      html.classList.remove("landing-bg");
      body.style.backgroundImage = "";
      body.style.backgroundSize = "";
      body.style.backgroundPosition = "";
      body.style.backgroundRepeat = "";
      body.style.backgroundAttachment = "";
      body.style.backgroundColor = "";
    };
  }, [pathname, isMobile]);

  return <>{children}</>;
}
