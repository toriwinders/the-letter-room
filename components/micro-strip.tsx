const items = [
  "A letter arrives.",
  "You read it slowly.",
  "You bring one question into real life.",
];

export function MicroStrip() {
  return (
    <div className="w-full max-w-md border-t border-[var(--color-border)] pt-5 lg:ml-auto">
      <ul className="grid gap-3 text-left text-[15px] leading-relaxed text-[var(--color-muted)] sm:grid-cols-3 sm:gap-5 lg:grid-cols-1">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
