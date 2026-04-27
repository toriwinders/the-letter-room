import Link from "next/link";
import { ReactNode } from "react";
import { FaqList } from "@/components/faq-list";
import { ProductPreview } from "@/components/product-preview";

const headline: ReactNode = (
  <>
    <span className="sm:hidden">
      A mailed letter for
      <br />
      people craving more depth
      <br />
      and conversation in a
      <br />
      chronically online world.
    </span>
    <span className="hidden sm:inline md:hidden">
      A mailed letter for people
      <br />
      craving more depth and
      <br />
      conversation in a chronically
      <br />
      online world.
    </span>
    <span className="hidden md:inline lg:hidden">
      A mailed letter for people craving more depth
      <br />
      and conversation in a chronically online world.
    </span>
    <span className="hidden lg:inline">
      A mailed letter for people craving
      <br />
      more depth and conversation in a chronically online world.
    </span>
  </>
);

export function WaitlistFlow() {
  return (
    <div className="mx-auto w-full max-w-[64rem] text-center">
      <h1
        id="waitlist-heading"
        className="copy-rhythm mx-auto max-w-[23ch] text-balance text-[1.5rem] leading-[1.02] sm:max-w-[28ch] sm:text-[1.85rem] md:max-w-[38rem] md:text-[2.1rem] md:leading-[1.03] lg:max-w-[43.75rem]"
      >
        {headline}
      </h1>

      <div className="mx-auto mt-10 max-w-[28rem] sm:mt-12">
        <Link
          className="button-primary inline-flex min-h-12 w-full items-center justify-center px-6 py-3 text-base"
          href="https://buy.stripe.com/dRmfZgckpge52St2t84gg00"
        >
          Get your first letter
        </Link>
      </div>

      <ProductPreview />

      <section
        aria-labelledby="why-this-exists-heading"
        className="mx-auto mt-14 w-full max-w-[44rem] text-center sm:mt-16"
      >
        <p className="eyebrow">Why this exists</p>
        <h2
          id="why-this-exists-heading"
          className="copy-rhythm mx-auto mt-3 max-w-[38rem] text-[0.98rem] leading-[1.08] sm:max-w-[43.75rem] sm:text-[1.12rem] md:text-[1.5rem] md:leading-[1.06] lg:text-[1.72rem] lg:leading-[1.04]"
        >
          There&apos;s so much more to talk about.
        </h2>

        <div className="copy-rhythm mx-auto mt-4 max-w-[44rem] text-[0.95rem] leading-[1.6] text-[var(--color-muted)] sm:text-[1rem]">
          <p>
            Technology has made it easier to stay in touch, but harder to
            actually connect. We text instead of call. React instead of respond.
            We know what our friends ate for dinner but not what&apos;s keeping
            them up at night. And when we do get together, we default to the
            catch-up, the job, the house, the baby, and run out of time before
            we get to the stuff that actually matters.
          </p>
          <p className="mt-4">
            The Letter Room is changing that. Think of it like a book club, but
            for the stuff that&apos;s actually on your mind.
          </p>
          <p className="mt-4">
            I started this because I got tired of the catch-up. I wanted the
            real thing.
          </p>
        </div>
      </section>

      <section
        aria-labelledby="founding-member-heading"
        className="mx-auto mt-14 w-full max-w-[44rem] border-t border-[var(--color-line)] pt-10 text-center sm:mt-16 md:pt-14"
      >
        <p className="eyebrow">Founding member offer</p>
        <h2
          id="founding-member-heading"
          className="copy-rhythm mx-auto mt-3 max-w-[44rem] text-[0.98rem] leading-[1.08] sm:max-w-[44rem] sm:text-[1.12rem] md:text-[1.5rem] md:leading-[1.06] lg:text-[1.72rem] lg:leading-[1.04]"
        >
          <span>
            $8/month.
            <br />
            Your first letter is on us if you subscribe before June 1.
          </span>
        </h2>
      </section>

      <div className="mx-auto mt-10 max-w-[28rem] sm:mt-12">
        <Link
          className="button-primary inline-flex min-h-12 w-full items-center justify-center px-6 py-3 text-base"
          href="https://buy.stripe.com/dRmfZgckpge52St2t84gg00"
        >
          Get your first letter
        </Link>
      </div>

      <FaqList />
    </div>
  );
}
