"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useId, useState } from "react";

const headline =
  "A monthly mailed letter for people craving more depth and conversation in a chronically online world.";

const supportingCopy =
  "Musings on modern life, delivered by mail. For people who want more interesting things to talk about.";

export function WaitlistFlow() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleWaitlistSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void submitWaitlist();
  };

  const submitWaitlist = async () => {
    const normalizedEmail = email.trim();

    if (!normalizedEmail) {
      setEmailError("Please enter your email address.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    setEmailError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: normalizedEmail }),
      });

      const payload = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(payload.error || "Something went wrong while saving your email.");
      }

      router.push(`/success?email=${encodeURIComponent(normalizedEmail)}`);
    } catch (error) {
      setEmailError(
        error instanceof Error
          ? error.message
          : "Something went wrong while saving your email.",
      );
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <WaitlistForm
        email={email}
        emailError={emailError}
        isSubmitting={isSubmitting}
        onEmailChange={setEmail}
        onSubmit={handleWaitlistSubmit}
      />
    </div>
  );
}

function WaitlistForm({
  email,
  emailError,
  isSubmitting,
  onEmailChange,
  onSubmit,
}: {
  email: string;
  emailError: string;
  isSubmitting: boolean;
  onEmailChange: (value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}) {
  const emailId = useId();
  const emailErrorId = useId();

  return (
    <div className="mx-auto max-w-3xl text-center">
      <h1
        id="waitlist-heading"
        className="copy-rhythm mx-auto max-w-[16ch] text-balance text-[1.5rem] leading-[0.98] sm:max-w-[18ch] sm:text-[2rem] md:max-w-[22ch] md:text-[2.35rem] lg:max-w-[24ch] lg:text-[2.7rem]"
      >
        {headline}
      </h1>
      <p className="copy-rhythm mx-auto mt-5 max-w-[38rem] text-[0.84rem] leading-[1.3] text-[var(--color-muted)] sm:text-[0.88rem] lg:max-w-none lg:whitespace-nowrap">
        {supportingCopy}
      </p>

      <form className="mx-auto mt-9 max-w-[38rem]" noValidate onSubmit={onSubmit}>
        <label className="sr-only" htmlFor={emailId}>
          Email address
        </label>
        <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
          <div className="field-shell px-0 py-3 sm:flex-1">
            <input
              id={emailId}
              className="field-input text-base"
              type="email"
              name="email"
              autoComplete="email"
              enterKeyHint="go"
              placeholder="Email address"
              value={email}
              onChange={(event) => onEmailChange(event.target.value)}
              aria-invalid={emailError ? "true" : "false"}
              aria-describedby={emailError ? emailErrorId : undefined}
              disabled={isSubmitting}
              required
            />
          </div>
          <button className="button-primary min-h-12 px-6 py-3 text-base" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Joining..." : "Join the waitlist"}
          </button>
        </div>

        <p
          id={emailError ? emailErrorId : undefined}
          className="mt-3 min-h-6 text-sm text-[#9a3e36]"
          aria-live="polite"
        >
          {emailError}
        </p>

        <p className="copy-rhythm mx-auto mt-3 max-w-lg text-sm leading-relaxed text-[var(--color-muted)] sm:text-[0.96rem]">
          Join the waitlist to receive your first letter, our complimentary
          mailing before founding spots open.
        </p>
      </form>
    </div>
  );
}
