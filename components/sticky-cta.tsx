"use client";

import { useEffect, useState } from "react";
import { EmailCapture } from "@/components/email-capture";

export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > window.innerHeight);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="sticky-cta sm:hidden"
      style={{
        transform: visible ? "translateY(0)" : "translateY(100%)",
        transition: "transform 250ms ease",
      }}
    >
      <EmailCapture buttonText="I want in" successMessage="You're in. Check your inbox." />
    </div>
  );
}
