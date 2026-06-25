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

          <div className="mx-auto mt-12 max-w-[44rem] overflow-hidden rounded-[4px] sm:mt-16">
            <img
              src="/images/table-dip.jpg"
              alt="The Conversation Club letter and cards on a table beside fresh bread and burrata"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
