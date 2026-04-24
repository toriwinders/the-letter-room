import { BrandLockup } from "@/components/brand-lockup";
import { WaitlistFlow } from "@/components/waitlist-flow";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] text-[var(--color-ink)]">
      <div className="page-glow" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-[96rem] flex-col px-5 py-5 sm:px-8 sm:py-7 lg:px-12 lg:py-8">
        <header className="pt-0 sm:pt-1 lg:pt-2">
          <BrandLockup />
        </header>

        <section
          aria-labelledby="waitlist-heading"
          className="relative mt-2 flex flex-1 items-start justify-center sm:mt-3 lg:mt-4"
        >
          <div className="w-full max-w-[72rem]">
            <WaitlistFlow />
          </div>
        </section>
      </div>
    </main>
  );
}
