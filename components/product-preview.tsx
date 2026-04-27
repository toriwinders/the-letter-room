function EnvelopeIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="feature-icon"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3.75 7.25A2.25 2.25 0 0 1 6 5h12a2.25 2.25 0 0 1 2.25 2.25v9.5A2.25 2.25 0 0 1 18 19H6a2.25 2.25 0 0 1-2.25-2.25z" />
      <path d="m4.5 7.75 6.74 5.13a1.25 1.25 0 0 0 1.52 0l6.74-5.13" />
      <path d="m11.15 8.1.85-.6.85.6" />
      <path d="M11.15 8.1c.17-.52.53-.85.85-.85s.68.33.85.85" />
    </svg>
  );
}

function LetterIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="feature-icon"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.5 4.75h6.88L18.5 8.9v10.35A1.75 1.75 0 0 1 16.75 21h-9.5A1.75 1.75 0 0 1 5.5 19.25v-12.75A1.75 1.75 0 0 1 7.25 4.75z" />
      <path d="M14.25 4.75V9h4.25" />
      <path d="M8.75 12h6.5" />
      <path d="M8.75 15h6.5" />
    </svg>
  );
}

function SpeechBubbleIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="feature-icon"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 18.25H4.75A1.75 1.75 0 0 1 3 16.5v-8A1.75 1.75 0 0 1 4.75 6.75h14.5A1.75 1.75 0 0 1 21 8.5v8a1.75 1.75 0 0 1-1.75 1.75H11.5L7 21z" />
      <path d="M9 12h.01" />
      <path d="M12 12h.01" />
      <path d="M15 12h.01" />
    </svg>
  );
}

export function ProductPreview() {
  return (
    <section
      aria-label="What arrives each month"
      className="section-band section-band-product section-gap mt-10 text-center sm:mt-16"
    >
      <div className="section-inner">
        <div className="product-card">
          <p className="eyebrow">What Arrives Each Month</p>

          <div className="mx-auto mt-3 max-w-[38rem]">
            <h2 className="section-title copy-rhythm">
              You have 147 unread newsletters in your inbox. You don&apos;t need another
              one.
            </h2>
          </div>

          <div className="why-grid mt-16 sm:mt-20 lg:mt-24">
            <article className="why-card">
              <div className="icon-badge">
                <EnvelopeIcon />
              </div>
              <h3 className="copy-rhythm mt-5 text-[1.34rem] leading-[1.18] text-[var(--color-ink)] sm:text-[1.32rem]">
                This is a letter. Mailed.
              </h3>
              <p className="copy-rhythm mx-auto mt-3 max-w-[19rem] text-[0.95rem] leading-[1.6] text-[var(--color-muted)] sm:text-[1rem]">
                Each month, an envelope will arrive at your door, made to feel like it
                matters the moment you hold it.
              </p>
            </article>

            <article className="why-card">
              <div className="icon-badge">
                <LetterIcon />
              </div>
              <h3 className="copy-rhythm mt-5 text-[1.34rem] leading-[1.18] text-[var(--color-ink)] sm:text-[1.32rem]">
                A letter you&apos;ll actually want to read.
              </h3>
              <p className="copy-rhythm mx-auto mt-3 max-w-[19rem] text-[0.95rem] leading-[1.6] text-[var(--color-muted)] sm:text-[1rem]">
                A short reflection on modern life, written like it&apos;s coming from
                your smartest, most observant friend. The kind that makes you stop and
                think, &quot;I&apos;ve felt that too.&quot;
              </p>
            </article>

            <article className="why-card">
              <div className="icon-badge">
                <SpeechBubbleIcon />
              </div>
              <h3 className="copy-rhythm mt-5 text-[1.34rem] leading-[1.18] text-[var(--color-ink)] sm:text-[1.32rem]">
                A card you&apos;ll actually want to use.
              </h3>
              <p className="copy-rhythm mx-auto mt-3 max-w-[19rem] text-[0.95rem] leading-[1.6] text-[var(--color-muted)] sm:text-[1rem]">
                A conversation card with a theme and prompts sparked by the month&apos;s
                letter. Bring it to dinner, on a walk, or to a night in with the
                friends you don&apos;t see enough.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
