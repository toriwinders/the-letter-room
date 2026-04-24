"use client";

import Link from "next/link";
import { FormEvent, useId, useState } from "react";

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

export function SuccessFlow({ email }: { email?: string }) {
  const [step, setStep] = useState<"address" | "complete">("address");
  const [completionVariant, setCompletionVariant] =
    useState<CompletionVariant>("address-saved");
  const [addressFields, setAddressFields] =
    useState<AddressFields>(initialAddressFields);
  const [addressError, setAddressError] = useState("");

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
      {step === "address" ? (
        <AddressForm
          addressError={addressError}
          email={email}
          fields={addressFields}
          onChange={setAddressFields}
          onSkip={() => {
            setCompletionVariant("waitlist-only");
            setStep("complete");
          }}
          onSubmit={handleAddressSubmit}
        />
      ) : (
        <CompletionState variant={completionVariant} />
      )}
    </div>
  );
}

function AddressForm({
  addressError,
  email,
  fields,
  onChange,
  onSkip,
  onSubmit,
}: {
  addressError: string;
  email?: string;
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
        <h1 className="mt-3 max-w-2xl text-balance text-[2rem] leading-[1.02] tracking-[-0.03em] sm:text-[2.6rem]">
          You’re officially on the waitlist for The Letter Room.
        </h1>
        <p className="mt-5 max-w-xl text-[1rem] leading-relaxed text-[var(--color-muted)] sm:text-[1.08rem]">
          Want to receive the first letter by mail? Share your mailing address
          below and we’ll send you our complimentary first edition before
          launch.
        </p>
        {email ? (
          <p className="mt-4 text-sm text-[var(--color-muted)]">
            Signed up as <span className="text-[var(--color-ink)]">{email}</span>
          </p>
        ) : null}
      </div>

      <form className="mt-8 max-w-[38rem] space-y-4" noValidate onSubmit={onSubmit}>
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
          <button
            className="button-primary w-full px-7 py-4 text-sm uppercase tracking-[0.18em] sm:w-auto"
            type="submit"
          >
            Submit mailing info
          </button>
          <button className="text-link text-sm" type="button" onClick={onSkip}>
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
      ? "We’ll be in touch when your first letter is ready."
      : "We’ll be in touch when your first letter is ready, and you can share your mailing details later.";

  return (
    <div className="max-w-2xl">
      <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-brand)]">
        You’re in.
      </p>
      <h1 className="mt-3 max-w-2xl text-balance text-[2rem] leading-[1.02] tracking-[-0.03em] sm:text-[2.6rem]">
        {heading}
      </h1>
      <p className="mt-5 max-w-xl text-[1rem] leading-relaxed text-[var(--color-muted)] sm:text-[1.08rem]">
        {body}
      </p>
      <Link className="text-link mt-6 inline-flex text-sm" href="/">
        Back to home
      </Link>
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
