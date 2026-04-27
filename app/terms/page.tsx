import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] px-5 py-10 text-[var(--color-ink)] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[42rem]">
        <Link className="text-link text-[0.92rem]" href="/">
          Back to home
        </Link>
        <p className="eyebrow">Terms</p>
        <h1 className="copy-rhythm mt-3 text-[2rem] leading-[1.02] sm:text-[2.4rem]">
          Terms of Service
        </h1>

        <div className="copy-rhythm mt-8 space-y-6 text-[0.98rem] leading-[1.7] text-[var(--color-muted)]">
          <p>
            The Letter Room is a monthly mailed subscription. Letters ship in
            the first week of each month.
          </p>
          <p>
            Founding member subscriptions placed before June 1, 2026 include a
            first letter on us. After that, subscriptions renew at
            $8/month until canceled.
          </p>
          <p>
            You can cancel before the end of any month if you’d like to pause
            before the next letter is sent. Because each issue is prepared for
            mailing, we cannot guarantee refunds for letters already processed
            for fulfillment.
          </p>
          <p>
            Questions about your subscription can be sent to
            {" "}
            hello@jointheletterroom.com.
          </p>
        </div>
      </div>
    </main>
  );
}
