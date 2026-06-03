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
      <h1 className="section-title mx-auto mt-4 max-w-[38rem]" style={{ fontSize: "2rem" }}>
        Give someone a reason to plan something.
      </h1>
      <p className="mx-auto mt-5 max-w-[34rem] text-[1.0625rem] leading-[1.65] text-[var(--color-espresso)]">
        Gift Conversation Club — a letter and a conversation card, mailed to
        their door every month.
      </p>

      <div className="mx-auto mt-12 flex max-w-[36rem] flex-col gap-4 sm:flex-row sm:gap-6">
        <Link
          href="https://buy.stripe.com/8x24gyfwB2nf78JebQ4gg04"
          target="_blank"
          rel="noreferrer"
          className="flex-1 rounded-[4px] border border-[var(--color-stone)] bg-[var(--color-ivory)] px-6 py-8 text-center transition-all hover:border-[var(--color-gold)]"
        >
          <p className="text-[1.4rem] text-[var(--color-plum)]" style={{ fontFamily: "var(--font-brand)" }}>
            3 months
          </p>
          <p className="mt-1 text-[1.1rem] text-[var(--color-gold)]">$21</p>
        </Link>

        <Link
          href="https://buy.stripe.com/eVq00iachfa150BgjY4gg05"
          target="_blank"
          rel="noreferrer"
          className="flex-1 rounded-[4px] border border-[var(--color-stone)] bg-[var(--color-ivory)] px-6 py-8 text-center transition-all hover:border-[var(--color-gold)]"
        >
          <p className="text-[1.4rem] text-[var(--color-plum)]" style={{ fontFamily: "var(--font-brand)" }}>
            6 months
          </p>
          <p className="mt-1 text-[1.1rem] text-[var(--color-gold)]">$42</p>
        </Link>
      </div>

      <p className="mx-auto mt-10 max-w-[30rem] text-[0.875rem] leading-[1.65] text-[var(--color-espresso)]">
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
