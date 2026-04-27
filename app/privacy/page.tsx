import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] px-5 py-10 text-[var(--color-ink)] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[42rem]">
        <Link className="text-link text-[0.92rem]" href="/">
          Back to home
        </Link>
        <p className="eyebrow">Privacy</p>
        <h1 className="copy-rhythm mt-3 text-[2rem] leading-[1.02] sm:text-[2.4rem]">
          Privacy Policy
        </h1>

        <div className="copy-rhythm mt-8 space-y-6 text-[0.98rem] leading-[1.7] text-[var(--color-muted)]">
          <p>
            The Letter Room collects the information needed to process your
            subscription and mail your monthly letter, including your name,
            email address, payment details, and shipping address.
          </p>
          <p>
            Payments are processed securely by Stripe. We do not store your full
            card details on this site.
          </p>
          <p>
            We use your information to manage subscriptions, send order and
            service emails, and deliver your letters. We do not sell your
            personal information.
          </p>
          <p>
            We use privacy-friendly analytics (Cloudflare Web Analytics) to
            understand how visitors use this site. No cookies are used and no
            personal information is collected through analytics.
          </p>
          <p>
            If you have questions about your information or want your details
            removed after canceling, email hello@jointheletterroom.com.
          </p>
        </div>
      </div>
    </main>
  );
}
