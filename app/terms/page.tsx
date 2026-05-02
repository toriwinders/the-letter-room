import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | The Conversation Club",
  description:
    "Read the terms for The Conversation Club monthly mailed subscription, including renewals, cancellation timing, and fulfillment details.",
  alternates: {
    canonical: "https://conversationclub.co/terms",
  },
};

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
            The Conversation Club is a monthly mailed subscription. Letters and
            conversation cards ship in the first week of each month.
          </p>
          <p>
            Founding member subscriptions are $3/month for the first 100
            members, locked in for as long as you stay. After the founding
            period, subscriptions renew at $5/month until canceled.
          </p>
          <p>
            You can cancel before the end of any month if you&apos;d like to
            stop before the next letter is sent. Because each issue is prepared
            for mailing, we cannot guarantee refunds for letters already
            processed for fulfillment.
          </p>
          <p>
            Questions about your subscription can be sent to{" "}
            hello@conversationclub.co.
          </p>
        </div>
      </div>
    </main>
  );
}
