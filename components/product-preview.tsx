export function ProductPreview() {
  return (
    <section
      aria-labelledby="product-preview-heading"
      className="mx-auto mt-14 w-full max-w-[44rem] border-y border-[var(--color-line)] py-10 text-center md:py-14"
    >
      <p className="eyebrow">What arrives each month</p>
      <h2
        id="product-preview-heading"
        className="copy-rhythm mx-auto mt-3 max-w-[44rem] text-[0.98rem] leading-[1.08] sm:max-w-[44rem] sm:text-[1.12rem] md:text-[1.5rem] md:leading-[1.06] lg:text-[1.72rem] lg:leading-[1.04]"
      >
        <span>
          A letter you&apos;ll actually want to read.
          <br />
          A card you&apos;ll actually want to use.
        </span>
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
    </section>
  );
}
