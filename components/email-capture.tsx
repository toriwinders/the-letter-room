"use client";

import { useState } from "react";

export function EmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || status === "sending") return;

    setStatus("sending");

    try {
      const res = await fetch("/api/free-prompt", {
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
        disabled={status === "sending"}
        className="button-primary shrink-0 rounded-lg px-5 py-3 text-[0.9rem] disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send it"}
      </button>
      {status === "error" && (
        <p className="mt-2 text-[0.85rem] text-red-600">
          Something went wrong. Try again.
        </p>
      )}
    </form>
  );
}
