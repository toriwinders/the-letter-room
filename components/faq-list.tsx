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
    question: "What does joining the waitlist get me?",
    answer:
      "First access when we launch, a locked-in founding member price, and a say in what this thing becomes. The first 100 people in are the ones who shape it.",
  },
  {
    question: "When does it launch?",
    answer: "June 22. Everyone on the waitlist gets first access.",
  },
  {
    question: "Where do you ship?",
    answer:
      "Within the U.S. for now. Letters ship monthly — subscribe by the 5th to get that month's letter. Subscribe after the 5th and your first letter ships the following month.",
  },
  {
    question: "How much will it cost?",
    answer:
      "$7/month for founding members — a price that never goes up, no matter what happens after launch. Cancel anytime.",
  },
  {
    question: "Can I gift it?",
    answer: (
      <>
        Yes. You can gift 3 months ($21) or 6 months ($42). Pick one below:
        <span className="mt-3 flex flex-col gap-2 sm:flex-row sm:gap-4">
          <Link
            className="text-link"
            href="https://buy.stripe.com/8x24gyfwB2nf78JebQ4gg04"
            target="_blank"
            rel="noreferrer"
          >
            Gift 3 months &mdash; $21
          </Link>
          <Link
            className="text-link"
            href="https://buy.stripe.com/eVq00iachfa150BgjY4gg05"
            target="_blank"
            rel="noreferrer"
          >
            Gift 6 months &mdash; $42
          </Link>
        </span>
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
                <summary className="flex min-h-12 list-none items-center justify-between gap-6 py-3 text-[1.0625rem] font-medium leading-snug text-[var(--color-espresso)]">
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
