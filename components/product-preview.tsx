const details = [
  "An envelope addressed to your door.",
  "A monthly reflection on modern life.",
  "One conversation prompt worth carrying into the week.",
] as const;

export function ProductPreview() {
  return (
    <section
      aria-labelledby="product-preview-heading"
      className="mx-auto mt-14 grid w-full max-w-[64rem] gap-8 border-y border-[var(--color-line)] py-10 text-left md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-12 md:py-14"
    >
      <div className="order-2 md:order-1">
        <p className="eyebrow">What arrives each month</p>
        <h2
          id="product-preview-heading"
          className="copy-rhythm mt-3 max-w-[22rem] text-[1.5rem] leading-[1.02] sm:text-[1.85rem] md:text-[2.1rem]"
        >
          A thoughtful letter, made to be left on the counter and passed around.
        </h2>

        <p className="copy-rhythm mt-4 max-w-[31rem] text-[0.96rem] leading-[1.6] text-[var(--color-muted)] sm:text-[1rem]">
          Until the real photograph arrives, here&apos;s the shape of it: cream
          stock, a clean fold, and a page you&apos;ll want to leave out until
          someone asks what you&apos;re reading.
        </p>

        <ul className="mt-6 grid gap-3 text-[0.94rem] leading-relaxed text-[var(--color-muted)] sm:grid-cols-3 sm:gap-4 sm:text-[0.96rem]">
          {details.map((detail) => (
            <li
              key={detail}
              className="border-t border-[var(--color-line)] pt-3 sm:border-l sm:border-t-0 sm:pl-4 sm:pt-0 first:sm:border-l-0 first:sm:pl-0"
            >
              {detail}
            </li>
          ))}
        </ul>
      </div>

      <div className="order-1 flex justify-center md:order-2 md:justify-end">
        <div className="letter-scene" aria-hidden="true">
          <div className="envelope-back" />
          <div className="envelope-front" />
          <div className="letter-sheet">
            <span className="letter-kicker">THE LETTER ROOM</span>
            <span className="letter-line letter-line--short" />
            <span className="letter-line" />
            <span className="letter-line" />
            <span className="letter-line letter-line--mid" />
            <span className="letter-line letter-line--short" />
            <span className="letter-prompt">A question worth bringing to dinner.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
