import { SuccessFlow } from "@/components/success-flow";

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ email?: string }>;
}) {
  const { email } = await searchParams;

  return (
    <main className="min-h-screen bg-[var(--color-background)] text-[var(--color-ink)]">
      <div className="relative mx-auto flex min-h-screen w-full max-w-[96rem] flex-col px-5 py-8 sm:px-8 sm:py-12 lg:px-12 lg:py-16">
        <section className="relative flex flex-1 items-start justify-center">
          <div className="w-full max-w-[44rem]">
            <SuccessFlow email={email} />
          </div>
        </section>
      </div>
    </main>
  );
}
