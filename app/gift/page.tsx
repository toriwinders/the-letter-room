import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";

export const metadata = {
  title: "Gift Conversation Club",
  description:
    "Gift a letter and a conversation card, mailed to their door every month.",
};

export default function GiftPage() {
  return (
    <div className="mx-auto w-full max-w-[64rem] px-5 pt-12 pb-0 text-center sm:px-8 sm:pt-20">
      <p className="eyebrow">Give a gift</p>
      <h1 className="section-title copy-rhythm mx-auto mt-3 max-w-[38rem] text-[1.6rem] sm:text-[2rem]">
        Give someone a reason to plan something.
      </h1>
      <p className="copy-rhythm mx-auto mt-5 max-w-[34rem] text-[1.05rem] leading-[1.6] text-[var(--color-muted)] sm:text-[1.1rem]">
        Gift Conversation Club — a letter and a conversation card, mailed to
        their door every month.
      </p>

      <div className="mx-auto mt-10 flex max-w-[36rem] flex-col gap-4 sm:flex-row sm:gap-6">
        <Link
          href="https://buy.stripe.com/8x24gyfwB2nf78JebQ4gg04"
          target="_blank"
          rel="noreferrer"
          className="flex-1 rounded-xl border border-[var(--color-border-strong)] bg-[var(--color-card-surface)] px-6 py-8 text-center transition-all hover:-translate-y-0.5 hover:shadow-lg"
        >
          <p className="text-[1.4rem] font-semibold text-[var(--color-ink)]">
            3 months
          </p>
          <p className="mt-1 text-[1.1rem] text-[var(--color-brand)]">$21</p>
        </Link>

        <Link
          href="https://buy.stripe.com/eVq00iachfa150BgjY4gg05"
          target="_blank"
          rel="noreferrer"
          className="flex-1 rounded-xl border border-[var(--color-border-strong)] bg-[var(--color-card-surface)] px-6 py-8 text-center transition-all hover:-translate-y-0.5 hover:shadow-lg"
        >
          <p className="text-[1.4rem] font-semibold text-[var(--color-ink)]">
            6 months
          </p>
          <p className="mt-1 text-[1.1rem] text-[var(--color-brand)]">$42</p>
        </Link>
      </div>

      <p className="copy-rhythm mx-auto mt-8 max-w-[30rem] text-[0.9rem] leading-[1.6] text-[var(--color-muted)]">
        After you purchase, email{" "}
        <Link className="text-link" href="mailto:hello@conversationclub.co">
          hello@conversationclub.co
        </Link>{" "}
        with the recipient&apos;s name and mailing address and we&apos;ll take
        it from there.
      </p>

      <SiteFooter />
    </div>
  );
}
