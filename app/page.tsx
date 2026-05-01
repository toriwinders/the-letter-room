import Link from "next/link";
import { BrandLockup } from "@/components/brand-lockup";
import { SiteFooter } from "@/components/site-footer";
import { WaitlistFlow } from "@/components/waitlist-flow";

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "The Conversation Club",
        url: "https://conversationclub.co",
        sameAs: ["https://www.instagram.com/theconversationclub/"],
        contactPoint: [
          {
            "@type": "ContactPoint",
            email: "hello@conversationclub.co",
            contactType: "customer support",
          },
        ],
      },
      {
        "@type": "WebSite",
        name: "The Conversation Club",
        url: "https://conversationclub.co",
        description:
          "A monthly mailed letter and conversation card for people who want more depth, connection, and in-person conversation.",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[var(--color-background)] text-[var(--color-ink)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="relative mx-auto flex min-h-screen w-full max-w-[96rem] flex-col px-5 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-10">
        <header className="pt-2 sm:pt-3 lg:pt-4">
          <nav
            aria-label="Primary"
            className="mx-auto mb-6 flex w-full max-w-[56rem] flex-wrap items-center justify-center gap-x-5 gap-y-2 text-center sm:mb-8"
          >
            <Link className="top-nav-link" href="#the-idea-heading">
              The Idea
            </Link>
            <Link className="top-nav-link" href="#whats-inside">
              What&apos;s Inside
            </Link>
            <Link className="top-nav-link" href="#faq-heading">
              Questions
            </Link>
            <Link
              className="top-nav-link"
              href="https://billing.stripe.com/p/login/dRmfZgckpge52St2t84gg00"
            >
              Account
            </Link>
            <Link
              className="top-nav-link"
              href="https://buy.stripe.com/4gMfZg3NT2nf64FffU4gg02"
            >
              Join
            </Link>
          </nav>
          <BrandLockup />
        </header>

        <section
          aria-labelledby="waitlist-heading"
          className="relative mt-8 flex flex-1 items-start justify-center sm:mt-10 lg:mt-12"
        >
          <div className="w-full max-w-[56rem]">
            <WaitlistFlow />
          </div>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
