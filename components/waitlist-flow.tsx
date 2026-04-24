"use client";

import { FormEvent, useId, useState } from "react";

type WaitlistStep = "waitlist" | "address" | "complete";
type CompletionVariant = "address-saved" | "waitlist-only";

type AddressFields = {
  firstName: string;
  lastName: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
};

const initialAddressFields: AddressFields = {
  firstName: "",
  lastName: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  postalCode: "",
  country: "United States",
};

const headline =
  "A monthly mailed letter for people craving more depth and conversation in a chronically online world.";

const supportingCopy =
  "Each month, receive a printed essay and a conversation card designed to be brought into real life.";

export function WaitlistFlow() {
  const [step, setStep] = useState<WaitlistStep>("waitlist");
  const [completionVariant, setCompletionVariant] =
    useState<CompletionVariant>("address-saved");
  const [email, setEmail] = useState("");
  const [addressFields, setAddressFields] =
    useState<AddressFields>(initialAddressFields);
  const [emailError, setEmailError] = useState("");
  const [addressError, setAddressError] = useState("");

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
    setStep("address");
  };

  const handleAddressSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const requiredValues = [
      addressFields.firstName,
      addressFields.addressLine1,
      addressFields.city,
      addressFields.state,
      addressFields.postalCode,
      addressFields.country,
    ];

    if (requiredValues.some((value) => !value.trim())) {
      setAddressError("Please complete the required mailing fields.");
      return;
    }

    setAddressError("");

    // TODO: Replace with real mailing details integration.
    // Example: await saveMailingDetails({ email, ...addressFields });
    setCompletionVariant("address-saved");
    setStep("complete");
  };

  return (
    <div className="w-full">
      {step === "waitlist" ? (
        <WaitlistForm
          email={email}
          emailError={emailError}
          onEmailChange={setEmail}
          onSubmit={handleWaitlistSubmit}
        />
      ) : null}

      {step === "address" ? (
        <AddressForm
          addressError={addressError}
          fields={addressFields}
          onChange={setAddressFields}
          onSkip={() => {
            setCompletionVariant("waitlist-only");
            setStep("complete");
          }}
          onSubmit={handleAddressSubmit}
        />
      ) : null}

      {step === "complete" ? (
        <CompletionState variant={completionVariant} />
      ) : null}
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
        className="max-w-4xl text-balance text-[2.25rem] leading-[0.96] tracking-[-0.03em] sm:text-[3.35rem] lg:text-[4.6rem]"
      >
        {headline}
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-muted)] sm:text-[1.22rem]">
        {supportingCopy}
      </p>

      <form className="mt-10 max-w-xl" noValidate onSubmit={onSubmit}>
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
              placeholder="Email address"
              value={email}
              onChange={(event) => onEmailChange(event.target.value)}
              aria-invalid={emailError ? "true" : "false"}
              aria-describedby={emailError ? emailErrorId : undefined}
              required
            />
          </div>
          <button
            className="button-primary min-h-12 px-6 py-3 text-sm uppercase tracking-[0.18em]"
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

        <p className="mt-3 max-w-lg text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
          Join the waitlist to receive Letter Zero, our complimentary first
          mailing before founding spots open.
        </p>
      </form>
    </div>
  );
}

function AddressForm({
  addressError,
  fields,
  onChange,
  onSkip,
  onSubmit,
}: {
  addressError: string;
  fields: AddressFields;
  onChange: (value: AddressFields) => void;
  onSkip: () => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}) {
  const updateField = (field: keyof AddressFields, value: string) => {
    onChange({
      ...fields,
      [field]: value,
    });
  };

  return (
    <div className="max-w-2xl">
      <div>
        <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-brand)]">
          You’re in.
        </p>
        <h1 className="mt-3 max-w-2xl text-balance text-[2rem] leading-[1.02] tracking-[-0.03em] sm:text-[3rem]">
          You’re officially on the waitlist for The Letter Room.
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--color-muted)] sm:text-[1.18rem]">
          Want to receive the first letter by mail? Share your mailing address
          below and we’ll send you our complimentary first edition before
          launch.
        </p>
      </div>

      <form className="mt-8 space-y-4" noValidate onSubmit={onSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">
          <TextField
            label="First name"
            value={fields.firstName}
            onChange={(value) => updateField("firstName", value)}
            autoComplete="given-name"
            required
          />
          <TextField
            label="Last name"
            value={fields.lastName}
            onChange={(value) => updateField("lastName", value)}
            autoComplete="family-name"
          />
        </div>

        <TextField
          label="Address line 1"
          value={fields.addressLine1}
          onChange={(value) => updateField("addressLine1", value)}
          autoComplete="address-line1"
          required
        />
        <TextField
          label="Address line 2"
          value={fields.addressLine2}
          onChange={(value) => updateField("addressLine2", value)}
          autoComplete="address-line2"
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <TextField
            label="City"
            value={fields.city}
            onChange={(value) => updateField("city", value)}
            autoComplete="address-level2"
            required
          />
          <TextField
            label="State"
            value={fields.state}
            onChange={(value) => updateField("state", value)}
            autoComplete="address-level1"
            required
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
          <TextField
            label="ZIP / Postal code"
            value={fields.postalCode}
            onChange={(value) => updateField("postalCode", value)}
            autoComplete="postal-code"
            required
          />
          <TextField
            label="Country"
            value={fields.country}
            onChange={(value) => updateField("country", value)}
            autoComplete="country-name"
            required
          />
        </div>

        <p className="min-h-6 text-sm text-[#9a3e36]" aria-live="polite">
          {addressError}
        </p>

        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <button className="button-primary w-full px-7 py-4 text-sm uppercase tracking-[0.18em] sm:w-auto" type="submit">
            Submit mailing info
          </button>
          <button
            className="text-link text-sm"
            type="button"
            onClick={onSkip}
          >
            Skip for now
          </button>
        </div>

        <p className="text-sm text-[var(--color-muted)]">
          The first letter is free and only available to waitlist members.
        </p>
      </form>
    </div>
  );
}

function CompletionState({
  variant,
}: {
  variant: CompletionVariant;
}) {
  const heading =
    variant === "address-saved"
      ? "Thanks — we’ve saved your mailing details."
      : "You’re officially on the waitlist.";

  const body =
    variant === "address-saved"
      ? "We’ll be in touch when Letter Zero is ready."
      : "We’ll be in touch when Letter Zero is ready, and you can share your mailing details later.";

  return (
    <div className="max-w-2xl">
      <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-brand)]">
        You’re in.
      </p>
      <h1 className="mt-3 max-w-2xl text-balance text-[2rem] leading-[1.02] tracking-[-0.03em] sm:text-[2.9rem]">
        {heading}
      </h1>
      <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--color-muted)] sm:text-[1.18rem]">
        {body}
      </p>
    </div>
  );
}

function TextField({
  autoComplete,
  label,
  onChange,
  required = false,
  value,
}: {
  autoComplete?: string;
  label: string;
  onChange: (value: string) => void;
  required?: boolean;
  value: string;
}) {
  const id = useId();

  return (
    <div>
      <label className="mb-2 block text-sm text-[var(--color-muted)]" htmlFor={id}>
        {label}
        {required ? " *" : ""}
      </label>
      <div className="field-shell px-0 py-3">
        <input
          id={id}
          className="field-input text-base"
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          autoComplete={autoComplete}
          required={required}
        />
      </div>
    </div>
  );
}
