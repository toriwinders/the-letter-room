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
    answer: "$8/month. Your first letter is on us if you subscribe before June 1.",
  },
  {
    question: "When will I receive my letter?",
    answer:
      "If you're subscribed by the 1st of the month, that month's letter is already on its way to you.",
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
      className="mx-auto mt-16 w-full max-w-[52rem] text-left"
    >
      <div className="max-w-[36rem]">
        <p className="eyebrow">Questions, answered</p>
        <h2
          id="faq-heading"
          className="copy-rhythm mt-3 text-[1.45rem] leading-[1.05] sm:text-[1.72rem] md:text-[1.95rem]"
        >
          <span>
            Everything you want to know
            <br className="md:hidden" />
            {" "}before your first letter shows up.
          </span>
        </h2>
      </div>

      <div className="mt-8 border-t border-[var(--color-line)]">
        {faqItems.map((item) => (
          <details
            key={item.question}
            className="faq-item border-b border-[var(--color-line)] py-4"
          >
            <summary className="copy-rhythm flex list-none items-center justify-between gap-6 text-[0.98rem] leading-snug text-[var(--color-ink)] sm:text-[1.02rem]">
              <span>{item.question}</span>
              <span className="faq-plus" aria-hidden="true">
                +
              </span>
            </summary>
            <p className="copy-rhythm mt-3 max-w-[36rem] pr-10 text-[0.92rem] leading-[1.6] text-[var(--color-muted)] sm:text-[0.96rem]">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
