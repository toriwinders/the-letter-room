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

          <div className="mx-auto mt-10 flex flex-col items-center gap-8 sm:flex-row sm:justify-center sm:gap-10">
            <div className="product-image-rotate w-full max-w-[16rem]" style={{ animationDelay: "0s" }}>
              <img
                src="/images/letter.png"
                alt="The Letter — a personal essay mailed monthly"
                className="w-full rounded-lg"
              />
              <h3 className="copy-rhythm mt-4 text-[1.2rem] leading-[1.18]">
                The Letter
              </h3>
            </div>

            <div className="product-image-rotate w-full max-w-[16rem]" style={{ animationDelay: "0.4s" }}>
              <img
                src="/images/conversation-cards.png"
                alt="Conversation Cards — prompts to bring to your next dinner"
                className="w-full rounded-lg"
              />
              <h3 className="copy-rhythm mt-4 text-[1.2rem] leading-[1.18]">
                The Conversation Card
              </h3>
            </div>

            <div className="product-image-rotate w-full max-w-[16rem]" style={{ animationDelay: "0.8s" }}>
              <img
                src="/images/business-cards.png"
                alt="Conversation Club business cards"
                className="w-full rounded-lg"
              />
              <h3 className="copy-rhythm mt-4 text-[1.2rem] leading-[1.18]">
                The Details
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
