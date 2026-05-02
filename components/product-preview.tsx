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
      id="whats-inside"
      aria-label="What shows up"
      className="section-band section-band-product section-gap text-center"
    >
      <div className="section-inner">
        <div className="product-card">
          <p className="eyebrow">What shows up</p>

          <div className="mx-auto mt-8 max-w-[28rem] sm:max-w-[38rem]">
            <h2 className="section-title copy-rhythm">
              An essay. A question.
              <br />
              And a reason to plan something.
            </h2>
            <p className="copy-rhythm mx-auto mt-3 max-w-[30rem] text-[1rem] leading-[1.55] text-[var(--color-muted)] sm:text-[1.05rem]">
              Everything arrives in an envelope designed to feel like it matters.
            </p>
          </div>

          <div className="why-grid why-grid-spacing" style={{ marginTop: "3rem" }}>
            <article className="why-card">
              <div className="icon-badge">
                <LetterIcon />
              </div>
              <h3 className="copy-rhythm mt-5 text-[1.34rem] leading-[1.18] sm:text-[1.32rem]">
                The Letter
              </h3>
              <p className="copy-rhythm mx-auto mt-3 max-w-[19rem] text-[1rem] leading-[1.6] text-[var(--color-muted)] sm:text-[1.05rem]">
                A personal essay on whatever I&apos;ve been thinking about that
                month. Friendship, getting older, what we actually want our
                lives to feel like.
              </p>
            </article>

            <article className="why-card">
              <div className="icon-badge">
                <SpeechBubbleIcon />
              </div>
              <h3 className="copy-rhythm mt-5 text-[1.34rem] leading-[1.18] sm:text-[1.32rem]">
                The Conversation Card
              </h3>
              <p className="copy-rhythm mx-auto mt-3 max-w-[19rem] text-[1rem] leading-[1.6] text-[var(--color-muted)] sm:text-[1.05rem]">
                A card with one theme and a few prompts — the kind of questions
                that change the conversation once somebody asks them.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
