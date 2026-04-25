const faqItems = [
  {
    question: "How much is it?",
    answer: "$8/month. Your first letter is on us.",
  },
  {
    question: "When will I receive each month’s letter?",
    answer:
      "If you’re subscribed by the 1st of the month, you’ll receive that month’s letter.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. Cancel before the end of the month if you’d like to take a break before the next letter is sent.",
  },
  {
    question: "What is the letter, exactly?",
    answer:
      "Each issue is a mailed reflection on modern life paired with a conversation prompt designed to travel into dinners, walks, and weekends with friends.",
  },
] as const;

export function FaqList() {
  return (
    <section
      aria-labelledby="faq-heading"
      className="mx-auto mt-16 w-full max-w-[52rem] text-left"
    >
      <div className="max-w-[32rem]">
        <p className="eyebrow">Questions, answered</p>
        <h2
          id="faq-heading"
          className="copy-rhythm mt-3 text-[1.45rem] leading-[1.05] sm:text-[1.72rem] md:text-[1.95rem]"
        >
          A few practical details, before the letter arrives.
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
