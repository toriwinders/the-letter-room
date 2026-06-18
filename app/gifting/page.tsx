import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";

export const metadata = {
  title: "Gift Conversation Club — The good kind of mail.",
  description:
    "Gift a letter and a conversation card, mailed to their door every month.",
};

const giftOptions = [
  {
    label: "3 months",
    price: "$21",
    href: "https://buy.stripe.com/8x24gyfwB2nf78JebQ4gg04",
  },
  {
    label: "6 months",
    price: "$42",
    href: "https://buy.stripe.com/eVq00iachfa150BgjY4gg05",
  },
  {
    label: "1 year",
    price: "$70",
    href: "https://buy.stripe.com/00wdR8dot3rj2StffU4gg06",
  },
];

export default function GiftPage() {
  return (
    <>
      {/* Hero */}
      <div className="section-band section-gap">
        <div className="section-inner">
          <div className="mx-auto max-w-[48rem] text-center">
            <p className="eyebrow">Give a gift</p>
            <h1
              className="section-title mx-auto mt-4 max-w-[38rem]"
              style={{ fontSize: "2rem" }}
            >
              Give someone better conversations.
            </h1>
            <p className="mx-auto mt-5 max-w-[34rem] text-[1.125rem] leading-[1.65] text-[var(--color-espresso)]">
              A personal essay and a conversation card, mailed to their door
              every month.
            </p>
          </div>
        </div>
      </div>

      {/* Gift options */}
      <div className="section-band section-band-product section-gap">
        <div className="section-inner">
          <div className="mx-auto grid max-w-[52rem] grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
            {giftOptions.map((opt) => (
              <Link
                key={opt.label}
                href={opt.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-[4px] border border-[var(--color-border-strong)] bg-[var(--color-ivory)] px-6 py-10 text-center transition-all hover:border-[var(--color-gold)]"
              >
                <p
                  className="text-[1.5rem] text-[var(--color-plum)]"
                  style={{ fontFamily: "var(--font-brand)" }}
                >
                  {opt.label}
                </p>
                <p className="mt-2 text-[1.75rem] font-medium text-[var(--color-plum)]">
                  {opt.price}
                </p>
              </Link>
            ))}
          </div>

        </div>
      </div>

      <SiteFooter />
    </>
  );
}
