import { SuccessFlow } from "@/components/success-flow";

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] text-[var(--color-ink)]">
      <div className="relative mx-auto flex min-h-screen w-full max-w-[96rem] flex-col px-5 py-8 sm:px-8 sm:py-12 lg:px-12 lg:py-16">
        <section className="relative flex flex-1 items-center justify-center">
          <div className="w-full max-w-[44rem]">
            <SuccessFlow />
          </div>
        </section>
      </div>
    </main>
  );
}
