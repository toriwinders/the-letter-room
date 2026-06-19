"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const CHECKOUT_URL = "https://buy.stripe.com/14A14mfwB4vnfFfgjY4gg03";

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
      <Link
        href={CHECKOUT_URL}
        target="_blank"
        rel="noreferrer"
        className="button-primary block w-full rounded-[4px] px-5 py-3 text-center text-[0.9375rem] font-medium"
        style={{ letterSpacing: "0.03em" }}
      >
        Join Conversation Club
      </Link>
    </div>
  );
}
