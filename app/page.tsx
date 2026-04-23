import { BrandLockup } from "@/components/brand-lockup";
import { MicroStrip } from "@/components/micro-strip";
import { WaitlistFlow } from "@/components/waitlist-flow";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] text-[var(--color-ink)]">
      <div className="page-glow" aria-hidden="true" />
      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-16">
        <header className="flex-1">
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <BrandLockup />
          </div>
        </header>

        <section
          aria-labelledby="waitlist-heading"
          className="mx-auto w-full max-w-3xl pb-10 sm:pb-14"
        >
          <WaitlistFlow />
        </section>

        <section className="mx-auto w-full max-w-4xl pb-10 sm:pb-14">
          <MicroStrip />
        </section>

        <footer className="border-t border-[var(--color-border)] pt-5 text-center text-xs uppercase tracking-[0.22em] text-[var(--color-muted)]">
          <p>The Letter Room</p>
        </footer>
      </div>
    </main>
  );
}
