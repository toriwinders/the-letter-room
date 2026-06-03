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

          <h2 className="section-title mx-auto mt-4 max-w-[48rem]">
            An essay. A question.
            <br />
            And a reason to plan something.
          </h2>
          <p className="mx-auto mt-4 max-w-[48rem] text-[1.0625rem] leading-[1.65] text-[var(--color-espresso)]">
            Everything arrives in an envelope designed to feel like it matters.
          </p>

          {/* Product images */}
          <div className="mx-auto mt-12 flex max-w-[48rem] flex-col items-center gap-10 sm:flex-row sm:items-start sm:justify-center">
            <div className="product-image-rotate w-full max-w-[14rem]" style={{ animationDelay: "0s" }}>
              <img
                src="/images/conversation-cards.png"
                alt="Conversation Cards"
                className="w-full"
              />
              <p className="mt-3 text-[0.9375rem] text-[var(--color-plum)]" style={{ fontFamily: "var(--font-brand)" }}>
                The Conversation Card
              </p>
            </div>

            <div className="product-image-rotate w-full max-w-[14rem]" style={{ animationDelay: "0.15s" }}>
              <img
                src="/images/letter.png"
                alt="The Letter"
                className="w-full"
              />
              <p className="mt-3 text-[0.9375rem] text-[var(--color-plum)]" style={{ fontFamily: "var(--font-brand)" }}>
                The Letter
              </p>
            </div>

            <div className="product-image-rotate w-full max-w-[14rem]" style={{ animationDelay: "0.3s" }}>
              <img
                src="/images/conversation-cards-2.png"
                alt="Conversation Card prompts"
                className="w-full"
              />
              <p className="mt-3 text-[0.9375rem] text-[var(--color-plum)]" style={{ fontFamily: "var(--font-brand)" }}>
                The Prompts
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
