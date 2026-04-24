import { BrandLockup } from "@/components/brand-lockup";
import { WaitlistFlow } from "@/components/waitlist-flow";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] text-[var(--color-ink)]">
      <div className="page-glow" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-[96rem] flex-col px-5 py-5 sm:px-8 sm:py-8 lg:px-12 lg:py-10">
        <header className="pt-2 sm:pt-3 lg:pt-4">
          <BrandLockup />
        </header>

        <section
          aria-labelledby="waitlist-heading"
          className="relative mt-4 flex flex-1 items-start justify-center sm:mt-6 lg:mt-8"
        >
          <div className="w-full max-w-[72rem]">
            <WaitlistFlow />
          </div>
        </section>
      </div>
    </main>
  );
}
