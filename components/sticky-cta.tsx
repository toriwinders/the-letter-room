"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function StickyCta({ href }: { href: string }) {
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
      <Link
        className="button-primary inline-flex min-h-11 w-full items-center justify-center px-6 py-2.5 text-[0.9rem]"
        href={href}
      >
        Get your first convo card — $3/month
      </Link>
    </div>
  );
}
