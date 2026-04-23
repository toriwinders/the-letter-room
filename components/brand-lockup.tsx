export function BrandLockup() {
  return (
    <div className="flex flex-col items-center pt-10 sm:pt-16 lg:pt-20">
      <p className="font-brand wordmark-tracking text-[clamp(3.5rem,11vw,7.75rem)] leading-[0.88] text-[var(--color-brand)]">
        The Letter Room
      </p>
      <p className="tagline-tracking mt-3 max-w-xs text-center text-lg text-[var(--color-brand)] sm:mt-4 sm:text-[1.55rem]">
        Something worth talking about.
      </p>
    </div>
  );
}
