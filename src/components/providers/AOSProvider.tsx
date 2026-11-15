"use client";

import { useEffect } from "react";

export default function AOSProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import("aos")).default;
      AOS.init({
        duration: 800,
        easing: "ease-in-out",
        offset: 80,
        once: true,
        disable: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
      });
    };
    initAOS();
  }, []);

  return <>{children}</>;
}
