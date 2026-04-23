const items = [
  "A letter arrives.",
  "You read it slowly.",
  "You bring one question into real life.",
];

export function MicroStrip() {
  return (
    <div className="editorial-card rounded-[2rem] border border-[var(--color-border)] px-6 py-5 sm:px-10">
      <ul className="grid gap-3 text-center text-sm tracking-[0.02em] text-[var(--color-muted)] sm:grid-cols-3 sm:gap-6 sm:text-base">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
