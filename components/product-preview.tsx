export function ProductPreview() {
  return (
    <section
      id="whats-inside"
      aria-label="What shows up"
      className="section-band section-band-product section-gap text-center"
    >
      <div className="section-inner">
        <div className="mx-auto max-w-[56rem]">
          <p className="eyebrow" style={{ color: "var(--color-plum)" }}>What shows up</p>

          <h2 className="section-title mx-auto mt-4 max-w-[48rem]">
            An essay. A question.
            <br />
            And a reason to plan something.
          </h2>
          <p className="mx-auto mt-4 max-w-[48rem] text-[1.125rem] leading-[1.65] text-[var(--color-espresso)]">
            Everything arrives in an envelope designed to feel like it matters.
          </p>

          {/* Product images — letter left, conversation cards stacked right */}
          <div className="mx-auto mt-12 flex max-w-[48rem] flex-col items-center gap-10 sm:flex-row sm:items-start sm:justify-center sm:gap-12">
            {/* The Letter */}
            <div className="w-full max-w-[18rem]">
              <div className="product-image-rotate" style={{ animationDelay: "0s" }}>
                <img
                  src="/images/letter.png"
                  alt="The Letter"
                  className="w-full"
                />
              </div>
              <p className="mt-3 text-[0.9375rem] text-[var(--color-plum)]" style={{ fontFamily: "var(--font-brand)" }}>
                The Letter
              </p>
            </div>

            {/* The Conversation Card — front and back stacked */}
            <div className="w-full max-w-[18rem]">
              <div className="flex flex-col gap-4">
                <div className="product-image-rotate" style={{ animationDelay: "0.2s" }}>
                  <img
                    src="/images/conversation-cards.png"
                    alt="Conversation Card front"
                    className="w-full"
                  />
                </div>
                <div className="product-image-rotate" style={{ animationDelay: "0.4s" }}>
                  <img
                    src="/images/conversation-cards-2.png"
                    alt="Conversation Card back"
                    className="w-full"
                  />
                </div>
              </div>
              <p className="mt-3 text-[0.9375rem] text-[var(--color-plum)]" style={{ fontFamily: "var(--font-brand)" }}>
                The Conversation Card
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
