export function ProductPreview() {
  return (
    <section
      id="whats-inside"
      aria-label="What shows up"
      className="section-band section-band-product section-gap text-center"
    >
      <div className="section-inner">
        <div className="mx-auto max-w-[48rem]">
          <p className="eyebrow">What shows up</p>

          <div className="mx-auto mt-6 max-w-[38rem]">
            <h2 className="section-title">
              An essay. A question.
              <br />
              And a reason to plan something.
            </h2>
            <p className="mx-auto mt-4 max-w-[30rem] text-[1.0625rem] leading-[1.65] text-[var(--color-espresso)]">
              Everything arrives in an envelope designed to feel like it matters.
            </p>
          </div>

          {/* Product images with animation */}
          <div className="mx-auto mt-12 flex max-w-[42rem] items-start justify-center gap-6 sm:gap-10">
            <div className="product-image-rotate w-full max-w-[12rem]" style={{ animationDelay: "0s" }}>
              <img
                src="/images/conversation-cards.png"
                alt="Conversation Cards"
                className="w-full"
              />
              <h3 className="mt-4 text-[var(--color-plum)]" style={{ fontFamily: "var(--font-brand)", fontSize: "1.375rem" }}>
                The Conversation Card
              </h3>
              <p className="mx-auto mt-2 max-w-[16rem] text-[0.9375rem] leading-[1.6] text-[var(--color-espresso)]">
                A card with one theme and a few prompts — the kind of questions
                that change the conversation once somebody asks them.
              </p>
            </div>

            <div className="product-image-rotate w-full max-w-[12rem]" style={{ animationDelay: "0.15s" }}>
              <img
                src="/images/letter.png"
                alt="The Letter"
                className="w-full"
              />
              <h3 className="mt-4 text-[var(--color-plum)]" style={{ fontFamily: "var(--font-brand)", fontSize: "1.375rem" }}>
                The Letter
              </h3>
              <p className="mx-auto mt-2 max-w-[16rem] text-[0.9375rem] leading-[1.6] text-[var(--color-espresso)]">
                A personal essay on whatever I&apos;ve been thinking about that
                month. Friendship, getting older, what we actually want our
                lives to feel like.
              </p>
            </div>

            <div className="product-image-rotate w-full max-w-[12rem]" style={{ animationDelay: "0.3s" }}>
              <img
                src="/images/business-cards.png"
                alt="Business cards"
                className="w-full"
              />
              <h3 className="mt-4 text-[var(--color-plum)]" style={{ fontFamily: "var(--font-brand)", fontSize: "1.375rem" }}>
                The Details
              </h3>
              <p className="mx-auto mt-2 max-w-[16rem] text-[0.9375rem] leading-[1.6] text-[var(--color-espresso)]">
                The little things that make it feel like something you want to keep.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
