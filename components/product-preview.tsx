const details = [
  "A reflection on something we're all feeling but not saying.",
  "A conversation card to bring somewhere that month.",
] as const;

export function ProductPreview() {
  return (
    <section
      aria-labelledby="product-preview-heading"
      className="mx-auto mt-14 w-full max-w-[44rem] border-y border-[var(--color-line)] py-10 text-center md:py-14"
    >
      <p className="eyebrow">What arrives each month</p>
      <h2
        id="product-preview-heading"
        className="copy-rhythm mx-auto mt-3 max-w-[24rem] text-[1.5rem] leading-[1.02] sm:text-[1.85rem] md:text-[2.1rem]"
      >
        A letter you&apos;ll actually want to read. A card you&apos;ll actually want
        to use.
      </h2>

      <div className="copy-rhythm mx-auto mt-4 max-w-[38rem] text-[0.96rem] leading-[1.6] text-[var(--color-muted)] sm:text-[1rem]">
        <p>
          You have 147 unread newsletters in your inbox. You don&apos;t need another
          one.
        </p>
        <p className="mt-4">
          This is a letter. Mailed. On paper. Each month, an envelope will arrive
          at your door, made to feel like something the moment you hold it. Inside
          is a short reflection on modern life, written like it&apos;s coming from
          the smartest, most observant friend you know. The kind that makes you
          stop and think, I&apos;ve felt that too.
        </p>
        <p className="mt-4">
          Tucked alongside it is a conversation card with a theme and a few
          prompts designed to travel with you. Whether that&apos;s on a walk, a
          girls&apos; night, or a dinner where you want to talk about something
          that actually matters.
        </p>
      </div>

      <ul className="mx-auto mt-6 grid max-w-[38rem] gap-3 text-left text-[0.94rem] leading-relaxed text-[var(--color-muted)] sm:grid-cols-2 sm:gap-4 sm:text-[0.96rem]">
        {details.map((detail) => (
          <li
            key={detail}
            className="border-t border-[var(--color-line)] pt-3 sm:border-l sm:border-t-0 sm:pl-4 sm:pt-0 first:sm:border-l-0 first:sm:pl-0"
          >
            {detail}
          </li>
        ))}
      </ul>
    </section>
  );
}
