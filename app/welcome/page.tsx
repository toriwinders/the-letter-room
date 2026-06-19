import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";

export const metadata = {
  title: "Welcome to Conversation Club",
  description: "You're in. Your first letter is on its way.",
};

export default function WelcomePage() {
  return (
    <>
      <div className="section-band section-gap">
        <div className="section-inner">
          <div className="mx-auto max-w-[40rem] text-center">
            <p className="eyebrow">You're in</p>
            <h1
              className="section-title mx-auto mt-4"
              style={{ fontSize: "2rem" }}
            >
              Welcome to Conversation Club.
            </h1>

            <div className="mx-auto mt-8 max-w-[36rem] text-[1.125rem] leading-[1.65] text-[var(--color-espresso)]">
              <p>
                Check your inbox for a welcome email from me with everything
                you need to know.
              </p>
              <p className="mt-5">
                Really glad you're here.
              </p>
              <p className="mt-2" style={{ fontFamily: "var(--font-brand)" }}>
                -tori
              </p>
            </div>

            <div className="mx-auto mt-12 flex flex-col items-center gap-3">
              <Link
                href="https://www.instagram.com/conversation__club"
                target="_blank"
                rel="noreferrer"
                className="text-link text-[0.9375rem]"
              >
                Follow @conversation__club
              </Link>
              <Link
                href="/"
                className="text-[0.875rem] text-[var(--color-stone)] hover:text-[var(--color-plum)]"
                style={{ transition: "color 180ms ease" }}
              >
                Back to conversationclub.co
              </Link>
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </>
  );
}
