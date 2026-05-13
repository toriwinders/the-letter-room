"use client";

import { useState } from "react";

type EmailCaptureProps = {
  buttonText?: string;
  successMessage?: string;
  variant?: "light" | "dark";
  endpoint?: string;
};

export function EmailCapture({
  buttonText = "Send it",
  successMessage = "Check your inbox — your first prompt is on the way.",
  variant = "light",
  endpoint = "/api/waitlist",
}: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || status === "sending") return;

    setStatus("sending");

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        throw new Error("Failed to send");
      }

      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <p
        className={`copy-rhythm text-[0.95rem] ${
          variant === "dark"
            ? "text-white/90"
            : "text-[var(--color-ink)]"
        }`}
      >
        {successMessage}
      </p>
    );
  }

  const isDark = variant === "dark";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:flex-row">
      <input
        type="email"
        required
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={`flex-1 rounded-lg border px-4 py-3 text-[0.95rem] outline-none ${
          isDark
            ? "border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:border-white/40"
            : "border-[var(--color-border-strong)] bg-[var(--color-card-surface)] text-[var(--color-ink)] placeholder:text-[#3E1B2C7a] focus:border-[#D8612D80]"
        }`}
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className={`shrink-0 rounded-lg px-5 py-3 text-[0.9rem] font-medium disabled:opacity-60 ${
          isDark
            ? "bg-white text-[var(--color-offer-bg)] hover:bg-white/90"
            : "button-primary"
        }`}
      >
        {status === "sending" ? "..." : buttonText}
      </button>
      {status === "error" && (
        <p
          className={`mt-2 text-[0.85rem] ${
            isDark ? "text-red-300" : "text-red-600"
          }`}
        >
          Something went wrong. Try again.
        </p>
      )}
    </form>
  );
}
