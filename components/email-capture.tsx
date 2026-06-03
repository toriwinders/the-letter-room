"use client";

import { useState } from "react";

type EmailCaptureProps = {
  buttonText?: string;
  successMessage?: string;
  variant?: "light" | "dark";
  endpoint?: string;
};

export function EmailCapture({
  buttonText = "Get me on the list",
  successMessage = "You're on the list. Keep an eye on your inbox.",
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
        className={`text-[0.95rem] ${
          variant === "dark"
            ? "text-[var(--color-ivory)]"
            : "text-[var(--color-espresso)]"
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
        className={`flex-1 rounded-[4px] border px-4 py-3 text-[0.9375rem] outline-none ${
          isDark
            ? "border-[#F5F0E830] bg-[#F5F0E810] text-[var(--color-ivory)] placeholder:text-[var(--color-stone)] focus:border-[var(--color-gold)]"
            : "border-[var(--color-stone)] bg-[var(--color-ivory)] text-[var(--color-espresso)] placeholder:text-[var(--color-stone)] focus:border-[var(--color-gold)]"
        }`}
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className={`shrink-0 rounded-[4px] px-5 py-3 text-[0.9375rem] font-medium disabled:opacity-60 ${
          isDark
            ? "bg-[var(--color-ivory)] text-[var(--color-plum)] hover:bg-[var(--color-gold)]"
            : "button-primary"
        }`}
        style={{ letterSpacing: "0.03em" }}
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
