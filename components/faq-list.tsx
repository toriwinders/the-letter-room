import Link from "next/link";
import { ReactNode } from "react";

const faqItems = [
  {
    question: "What is the letter, exactly?",
    answer:
      "Not a newsletter. Not a subscription box. A mailed letter with two things inside: a short reflection on modern life, the kind that makes you think \"I've felt that too but never had words for it\", and a conversation card with a theme and a few prompts. The letter is for you. The card is for you and your people.",
  },
  {
    question: "Who writes it?",
    answer:
      "I do. I'm Tori, new mom, constant overthinker, and the person who won't stop talking about how we need better conversations. Every letter is written by me.",
  },
  {
    question: "How is this different from a newsletter?",
    answer:
      "You can't leave a newsletter on the kitchen counter. You can't tuck it in your bag and pull it out at dinner. This is paper. It's designed to be held, passed around, and brought somewhere, with a conversation card that gives you a reason to actually go deeper with friends instead of just consuming content alone on your couch.",
  },
  {
    question: "What's the conversation card?",
    answer:
      "A 4x6 card with a theme and a few prompts sparked by that month's letter. Bring it to dinner. Bring it on a walk. Bring it to a night in with wine and the friends you don't see enough. It's the discussion guide for a book club, except the \"book\" is something you're already living.",
  },
  {
    question: "How much is it?",
    answer:
      "Founding members get their first month for $1 if they subscribe before June 1. After that, the subscription renews at $5/month until canceled.",
  },
  {
    question: "When will I receive my letter?",
    answer: "Letters ship in the first week of each month.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. Cancel before the end of the month and you won't receive the next one.",
  },
  {
    question: "Where do you ship?",
    answer: "The US, Canada, Mexico, and the UK.",
  },
  {
    question: "Can I gift a subscription?",
    answer: (
      <>
        Yes, gifting is coming soon. If you want to send The Letter Room to
        someone, reach out to{" "}
        <Link className="text-link" href="mailto:hello@jointheletterroom.com">
          hello@jointheletterroom.com
        </Link>{" "}
        and we&apos;ll make it happen.
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
            <p className="eyebrow">Questions, answered</p>
            <h2
              id="faq-heading"
              className="section-title copy-rhythm mt-3"
            >
              <span>
                Everything you want to know
                <br className="md:hidden" /> before your first letter shows up.
              </span>
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
