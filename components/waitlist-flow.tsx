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

const ritualColumns = [
  {
    title: "Subscribe by the 1st",
    body: "If you join by the 1st, that month’s letter is already on its way to you.",
  },
  {
    title: "A letter arrives",
    body: "Each issue pairs a reflection on modern life with a question worth staying with.",
  },
  {
    title: "Bring it into real life",
    body: "Carry it into dinner, walks, and nights with friends when the conversation deserves more depth.",
  },
] as const;

export function WaitlistFlow() {
  return (
    <div className="mx-auto w-full max-w-[64rem] text-center">
      <h1
        id="waitlist-heading"
        className="copy-rhythm mx-auto max-w-[23ch] text-balance text-[0.98rem] leading-[1.08] sm:max-w-[28ch] sm:text-[1.12rem] md:max-w-[38rem] md:text-[1.5rem] md:leading-[1.06] lg:max-w-[43.75rem] lg:text-[1.72rem] lg:leading-[1.04]"
      >
        {headline}
      </h1>

      <section
        aria-labelledby="how-it-works-heading"
        className="mx-auto mt-7 w-full max-w-[60rem] sm:mt-8"
      >
        <h2
          id="how-it-works-heading"
          className="copy-rhythm mx-auto mb-5 text-[0.96rem] leading-tight text-[var(--color-muted)] sm:mb-6 sm:text-[1.06rem] md:text-[1.22rem]"
        >
          Month by month
        </h2>

        <div className="flex flex-col divide-y divide-[var(--color-line)] md:flex-row md:divide-x md:divide-y-0">
          {ritualColumns.map((column) => (
            <div
              key={column.title}
              className="flex-1 px-0 py-5 first:pt-0 last:pb-0 md:px-6 md:py-0"
            >
              <h3 className="copy-rhythm text-[0.98rem] leading-tight text-[var(--color-ink)] sm:text-[1rem]">
                {column.title}
              </h3>
              <p className="copy-rhythm mx-auto mt-2 max-w-[16rem] text-[0.88rem] leading-[1.42] text-[var(--color-muted)] sm:max-w-[18rem] sm:text-[0.92rem] md:max-w-[15rem] lg:max-w-[17rem]">
                {column.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <ProductPreview />

      <section
        aria-labelledby="founding-member-heading"
        className="mx-auto mt-14 w-full max-w-[44rem] text-center sm:mt-16"
      >
        <p className="eyebrow">Founding member offer</p>
        <h2
          id="founding-member-heading"
          className="copy-rhythm mx-auto mt-3 max-w-[20ch] text-[1.55rem] leading-[1.03] sm:text-[1.85rem] md:text-[2.1rem]"
        >
          $8/month. Your first letter is on us if you subscribe before June 1.
        </h2>

        <p className="copy-rhythm mx-auto mt-4 max-w-[30rem] text-[0.95rem] leading-[1.6] text-[var(--color-muted)] sm:text-[1rem]">
          If you&apos;re subscribed by the 1st of the month, you&apos;ll receive
          that month&apos;s letter. Cancel before the end of the month if
          you&apos;d like to pause.
        </p>
      </section>

      <div className="mx-auto mt-10 max-w-[28rem] sm:mt-12">
        <Link
          className="button-primary inline-flex min-h-12 w-full items-center justify-center px-6 py-3 text-base"
          href="https://buy.stripe.com/dRmfZgckpge52St2t84gg00"
        >
          Get your first letter
        </Link>

        <p className="copy-rhythm mx-auto mt-4 max-w-[24rem] text-sm leading-relaxed text-[var(--color-muted)] sm:max-w-[28rem] sm:text-[0.94rem]">
          Subscribe before June 1 to join as a founding member.
          <br />
          $8/month after your first letter.
        </p>
      </div>

      <FaqList />
    </div>
  );
}
