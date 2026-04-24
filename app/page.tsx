import { BrandLockup } from "@/components/brand-lockup";
import { MicroStrip } from "@/components/micro-strip";
import { WaitlistFlow } from "@/components/waitlist-flow";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] text-[var(--color-ink)]">
      <div className="page-glow" aria-hidden="true" />
      <div className="page-grid" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-[96rem] flex-col px-6 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-10">
        <header className="pt-4 sm:pt-6">
          <BrandLockup />
        </header>

        <section
          aria-labelledby="waitlist-heading"
          className="relative mt-10 grid flex-1 items-start gap-12 lg:mt-16 lg:grid-cols-[minmax(0,1.2fr)_minmax(24rem,0.8fr)] lg:gap-16"
        >
          <div className="max-w-3xl lg:pl-8 xl:pl-16">
            <WaitlistFlow />
          </div>

          <div className="flex flex-col gap-8 self-end pb-4 lg:items-start lg:pb-8">
            <MicroStrip />
          </div>
        </section>

        <footer className="mt-14 flex items-center justify-between gap-4 border-t border-[var(--color-border)] pt-4 text-[11px] uppercase tracking-[0.24em] text-[var(--color-muted)] sm:mt-20">
          <p>The Letter Room</p>
          <p>Monthly mailing</p>
        </footer>
      </div>
    </main>
  );
}
