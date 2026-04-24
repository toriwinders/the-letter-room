"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useId, useState } from "react";

const headline =
  "Musings on modern life, delivered by mail. For people who want more interesting things to talk about.";

const supportingCopy =
  "Each month, receive a printed essay and a conversation card designed to be brought into real life.";

export function WaitlistFlow() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleWaitlistSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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

    // TODO: Replace with real waitlist integration.
    // Example: await createWaitlistLead({ email: normalizedEmail });
    router.push(`/success?email=${encodeURIComponent(normalizedEmail)}`);
  };

  return (
    <div className="w-full">
      <WaitlistForm
        email={email}
        emailError={emailError}
        onEmailChange={setEmail}
        onSubmit={handleWaitlistSubmit}
      />
    </div>
  );
}

function WaitlistForm({
  email,
  emailError,
  onEmailChange,
  onSubmit,
}: {
  email: string;
  emailError: string;
  onEmailChange: (value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}) {
  const emailId = useId();
  const emailErrorId = useId();

  return (
    <div className="max-w-3xl">
      <h1
        id="waitlist-heading"
        className="copy-rhythm max-w-[16ch] text-balance text-[2rem] leading-[0.98] sm:text-[2.8rem] md:text-[3.2rem] lg:text-[3.75rem]"
      >
        {headline}
      </h1>
      <p className="copy-rhythm mt-5 max-w-[38rem] text-[1rem] leading-relaxed text-[var(--color-muted)] sm:text-[1.08rem]">
        {supportingCopy}
      </p>

      <form className="mt-9 max-w-[38rem]" noValidate onSubmit={onSubmit}>
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
              required
            />
          </div>
          <button
            className="button-primary min-h-12 px-6 py-3 text-base"
            type="submit"
          >
            Join the waitlist
          </button>
        </div>

        <p
          id={emailError ? emailErrorId : undefined}
          className="mt-3 min-h-6 text-sm text-[#9a3e36]"
          aria-live="polite"
        >
          {emailError}
        </p>

        <p className="copy-rhythm mt-3 max-w-lg text-sm leading-relaxed text-[var(--color-muted)] sm:text-[0.96rem]">
          Join the waitlist to receive your first letter, our complimentary
          mailing before founding spots open.
        </p>
      </form>
    </div>
  );
}
