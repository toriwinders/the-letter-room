import Link from "next/link";

export function SuccessFlow() {
  return (
    <div className="mx-auto w-full max-w-[36rem] text-center">
      <h1 className="copy-rhythm mx-auto max-w-[20ch] text-balance text-[1.5rem] leading-[1.04] sm:text-[1.9rem] md:text-[2.2rem] lg:text-[2.5rem]">
        You&apos;re on the list.
      </h1>

      <div className="copy-rhythm mx-auto mt-5 max-w-[30rem] text-[1.05rem] leading-[1.55] text-[var(--color-muted)] sm:text-[1.1rem]">
        <p>
          When we launch, you&apos;ll be one of the first to know.
          Keep an eye on your inbox.
        </p>
        <p className="mt-4">
          In the meantime, if you know someone who&apos;d love this —
          send them our way.
        </p>
      </div>

      <div className="mx-auto mt-8">
        <Link
          href="/"
          className="text-[0.95rem] font-medium text-[var(--color-brand)] underline underline-offset-2 hover:opacity-80"
        >
          Back to conversationclub.co
        </Link>
      </div>
    </div>
  );
}
