import Link from "next/link";
import { ReactNode } from "react";

const headline: ReactNode = (
  <>
    <span className="sm:hidden">
      A mailed letter for
      <br />
      people craving more depth
      <br />
      and conversation in a
      <br />
      chronically online world.
    </span>
    <span className="hidden sm:inline md:hidden">
      A mailed letter for people
      <br />
      craving more depth and
      <br />
      conversation in a chronically
      <br />
      online world.
    </span>
    <span className="hidden md:inline lg:hidden">
      A mailed letter for people craving more depth
      <br />
      and conversation in a chronically online world.
    </span>
    <span className="hidden lg:inline">
      A mailed letter for people craving
      <br />
      more depth and conversation in a chronically online world.
    </span>
  </>
);

const ritualColumns = [
  {
    title: "Get your letter",
    body: "Delivered by mail each month.",
  },
  {
    title: "Read it",
    body: "A short reflection on modern life, paired with a conversation prompt.",
  },
  {
    title: "Bring it with you",
    body: "Dinner. Walks. Group chats. Nights with friends.",
  },
] as const;

export function WaitlistFlow() {
  return (
    <div className="mx-auto w-full max-w-[64rem] text-center">
      <h1
        id="waitlist-heading"
        className="copy-rhythm mx-auto max-w-[23ch] text-balance text-[0.98rem] leading-[1.08] sm:max-w-[28ch] sm:text-[1.12rem] md:max-w-[38rem] md:text-[1.5rem] md:leading-[1.06] lg:max-w-[43.75rem] lg:text-[1.72rem] lg:leading-[1.04]"
      >
        {headline}
      </h1>

      <section
        aria-labelledby="how-it-works-heading"
        className="mx-auto mt-7 w-full max-w-[60rem] sm:mt-8"
      >
        <h2 id="how-it-works-heading" className="sr-only">
          How it works
        </h2>

        <div className="flex flex-col divide-y divide-[var(--color-line)] md:flex-row md:divide-x md:divide-y-0">
          {ritualColumns.map((column) => (
            <div
              key={column.title}
              className="flex-1 px-0 py-5 first:pt-0 last:pb-0 md:px-6 md:py-0"
            >
              <h3 className="copy-rhythm text-[0.98rem] leading-tight text-[var(--color-ink)] sm:text-[1rem]">
                {column.title}
              </h3>
              <p className="copy-rhythm mx-auto mt-2 max-w-[16rem] text-[0.88rem] leading-[1.42] text-[var(--color-muted)] sm:max-w-[18rem] sm:text-[0.92rem] md:max-w-[15rem] lg:max-w-[17rem]">
                {column.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="mx-auto mt-8 max-w-[28rem]">
        <Link
          className="button-primary inline-flex min-h-12 w-full items-center justify-center px-6 py-3 text-base"
          href="https://buy.stripe.com/dRmfZgckpge52St2t84gg00"
          target="_blank"
          rel="noreferrer"
        >
          Join the club
        </Link>

        <p className="copy-rhythm mx-auto mt-4 max-w-[22rem] text-sm leading-relaxed text-[var(--color-muted)] sm:max-w-[28rem] sm:text-[0.94rem]">
          Receive the first issue complimentary as a founding member.
          <br />
          We have limited spots open.
        </p>
      </div>
    </div>
  );
}
