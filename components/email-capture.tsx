"use client";

import { useState } from "react";

export function EmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // TODO: wire up to Supabase or email service
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="copy-rhythm text-[0.95rem] text-[var(--color-ink)]">
        Check your inbox — your first prompt is on the way.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        required
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-card-surface)] px-4 py-3 text-[0.95rem] text-[var(--color-ink)] outline-none placeholder:text-[#3E1B2C7a] focus:border-[#D8612D80]"
      />
      <button
        type="submit"
        className="button-primary shrink-0 rounded-lg px-5 py-3 text-[0.9rem]"
      >
        Send it
      </button>
    </form>
  );
}
