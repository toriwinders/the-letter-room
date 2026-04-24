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
    <span className="hidden md:inline">
      A mailed letter for people craving more depth and conversation
      <br />
      in a chronically online world.
    </span>
  </>
);

const supportingCopy =
  "Each month receive reflections on modern life, paired with a prompt for more interesting conversations.";

export function WaitlistFlow() {
  return (
    <div className="mx-auto w-full max-w-4xl text-center">
      <h1
        id="waitlist-heading"
        className="copy-rhythm mx-auto max-w-[21ch] text-balance text-[0.98rem] leading-[1.08] sm:max-w-[24ch] sm:text-[1.12rem] md:max-w-[34ch] md:text-[1.56rem] lg:max-w-[36ch] lg:text-[1.78rem]"
      >
        {headline}
      </h1>

      <p className="copy-rhythm mx-auto mt-5 max-w-[19rem] text-[0.9rem] leading-[1.42] text-[var(--color-muted)] sm:max-w-[28rem] sm:text-[0.94rem] md:max-w-[34rem] md:text-[0.98rem]">
        {supportingCopy}
      </p>

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
