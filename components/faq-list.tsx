import Link from "next/link";
import { ReactNode } from "react";

const faqItems = [
  {
    question: "Is this a newsletter?",
    answer:
      "No. A newsletter lives in your inbox and competes with 40 other things. This shows up at your door, on paper, and it’s designed to be held.",
  },
  {
    question: "Who writes it?",
    answer:
      "Me. I’m Tori — new mom, lifelong overthinker, person who’s been writing personal essays for years and finally decided to mail them. Every letter is mine.",
  },
  {
    question: "What if I don’t have anyone to do the question with?",
    answer:
      "Use it anyway. Text it to a friend. Answer it in your notes at 11pm. But honestly — it’s a pretty good excuse to finally plan that dinner.",
  },
  {
    question: "How much?",
    answer:
      "Three dollars a month for the first 500 members, locked in forever. Five after that. No tiers, no add-ons.",
  },
  {
    question: "Can I cancel?",
    answer: "Yes. I’d rather you stay because you want to.",
  },
  {
    question: "Where do you ship?",
    answer: "Within the U.S. for now. More coming.",
  },
  {
    question: "How do I manage my account?",
    answer: (
      <>
        You can update your address, payment, or cancel anytime from your{" "}
        <Link
          className="text-link"
          href="https://billing.stripe.com/p/login/dRmfZgckpge52St2t84gg00"
        >
          account page
        </Link>
        .
      </>
    ),
  },
  {
    question: "Can I gift it?",
    answer: (
      <>
        Soon. Email me at{" "}
        <Link className="text-link" href="mailto:hello@conversationclub.co">
          hello@conversationclub.co
        </Link>{" "}
        and I&apos;ll set it up by hand.
      </>
    ),
  },
] as const satisfies ReadonlyArray<{ question: string; answer: ReactNode }>;

export function FaqList() {
  return (
    <section
      aria-labelledby="faq-heading"
      className="section-band section-band-faq section-gap mt-10 text-left sm:mt-16"
    >
      <div className="section-inner">
        <div className="mx-auto max-w-[52rem]">
          <div className="max-w-[36rem]">
            <p className="eyebrow">Things people ask</p>
            <h2
              id="faq-heading"
              className="section-title copy-rhythm mt-3"
            >
              Questions
            </h2>
          </div>

          <div className="mt-8 border-t border-[var(--color-line)]">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="faq-item border-b border-[var(--color-line)] py-2"
              >
                <summary className="copy-rhythm flex min-h-12 list-none items-center justify-between gap-6 py-2 text-[0.98rem] leading-snug text-[var(--color-ink)] sm:text-[1.02rem]">
                  <span>{item.question}</span>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="faq-chevron h-4 w-4 shrink-0 text-[var(--color-brand)]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </summary>
                <p className="copy-rhythm mt-2 max-w-[36rem] pr-10 pb-3 text-[0.92rem] leading-[1.6] text-[var(--color-muted)] sm:text-[0.96rem]">
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
