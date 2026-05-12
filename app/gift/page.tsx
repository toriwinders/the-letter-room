import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";

const STRIPE_CHECKOUT_URL =
  "https://buy.stripe.com/14A14mfwB4vnfFfgjY4gg03?prefilled_promo_code=GIFTFREE";

export const metadata: Metadata = {
  title: "You're Invited — The Conversation Club",
  description:
    "Your first month of The Conversation Club is free. A personal essay and conversation card, mailed to your door every month.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "You're Invited — The Conversation Club",
    description:
      "Your first month of The Conversation Club is free. A personal essay and conversation card, mailed to your door every month.",
    siteName: "The Conversation Club",
    type: "website",
    locale: "en_US",
    url: "https://conversationclub.co/gift",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "The Conversation Club. Something worth talking about.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "You're Invited — The Conversation Club",
    description:
      "Your first month of The Conversation Club is free. A personal essay and conversation card, mailed to your door every month.",
    images: [
      {
        url: "/twitter-image.png",
        alt: "The Conversation Club. Something worth talking about.",
      },
    ],
  },
};

export default function GiftPage() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] text-[var(--color-ink)]">
      <div className="relative mx-auto flex min-h-screen w-full max-w-[96rem] flex-col px-5 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-10">
        {/* Hero */}
        <section className="mx-auto mt-16 w-full max-w-[40rem] text-center sm:mt-24 lg:mt-32">
          <p className="eyebrow">You&apos;ve been invited</p>

          <h1 className="font-brand copy-rhythm mx-auto mt-4 max-w-[20ch] text-[1.75rem] leading-[1.05] sm:text-[2.2rem] lg:text-[2.6rem]">
            Someone thought you&apos;d like this.
          </h1>

          <p className="copy-rhythm mx-auto mt-5 max-w-[32rem] text-[1.1rem] leading-[1.55] text-[var(--color-muted)] sm:text-[1.15rem]">
            Your first month of The Conversation Club is on them.
          </p>
        </section>

        {/* What it is */}
        <section className="mx-auto mt-14 w-full max-w-[36rem] text-center sm:mt-20">
          <div className="copy-rhythm text-[1.05rem] leading-[1.6] text-[var(--color-muted)] sm:text-[1.1rem]">
            <p>
              A personal essay and a conversation card, mailed to your door
              every month. Read the letter with your morning coffee. Bring the
              card to your next dinner.
            </p>
            <p className="mt-4">
              It&apos;s the kind of thing you&apos;ll want to organize
              something around.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto mt-12 w-full max-w-[36rem] text-center sm:mt-16">
          <a
            href={STRIPE_CHECKOUT_URL}
            className="button-primary inline-block rounded-[8px] px-8 py-3.5 text-[1rem] font-medium sm:text-[1.05rem]"
          >
            Get your first month free
          </a>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
