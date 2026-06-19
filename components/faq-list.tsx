import Link from "next/link";
import { ReactNode } from "react";

const faqItems = [
  {
    question: "Is this a newsletter?",
    answer:
      "No. A newsletter lives in your inbox and competes with 40 other things. This shows up at your door, on paper, and it's designed to be held.",
  },
  {
    question: "Who writes it?",
    answer: (
      <>
        Me. I&apos;m Tori — writer, optimizer, and someone who thinks way too
        much about conversation. Every letter is mine. You can learn more at{" "}
        <Link
          className="text-link"
          href="https://toriwinders.com"
          target="_blank"
          rel="noreferrer"
        >
          toriwinders.com
        </Link>
        .
      </>
    ),
  },
  {
    question: "What if I don't have anyone to do the question with?",
    answer:
      "Use it anyway. Text it to a friend. Answer it in your notes at 11pm. But honestly — it's a pretty good excuse to finally plan that dinner.",
  },
  {
    question: "Where do you ship?",
    answer:
      "Within the U.S. for now. Letters ship the first week of every month. Subscribe by the last day of the month to get the next month's letter.",
  },
  {
    question: "How much does it cost?",
    answer:
      "$7/month for founding members. That price is locked in forever. Cancel anytime.",
  },
  {
    question: "Can I gift it?",
    answer: (
      <>
        Yes. You can gift 3 months, 6 months, or a full year.{" "}
        <Link
          className="text-link"
          href="/gifting"
        >
          See gift options
        </Link>
        .
      </>
    ),
  },
] as const satisfies ReadonlyArray<{ question: string; answer: ReactNode }>;

export function FaqList() {
  return (
    <section
      aria-labelledby="faq-heading"
      className="section-band section-band-faq section-gap"
    >
      <div className="section-inner">
        <div className="mx-auto max-w-[52rem] text-center">
          <p className="eyebrow">Things people ask</p>
          <h2
            id="faq-heading"
            className="section-title mt-4"
          >
            Questions
          </h2>

          {/* Divider between header and questions */}
          <div className="mt-8 border-t border-[var(--color-stone)]" />

          <div className="text-left">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="faq-item border-b border-[var(--color-stone)] py-2"
              >
                <summary className="flex min-h-12 list-none items-center justify-between gap-6 py-3 text-[1.125rem] font-medium leading-snug text-[var(--color-espresso)]">
                  <span>{item.question}</span>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="faq-chevron h-4 w-4 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </summary>
                <p className="mt-1 max-w-[36rem] pr-10 pb-4 text-[0.9375rem] leading-[1.65] text-[var(--color-espresso)]">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
