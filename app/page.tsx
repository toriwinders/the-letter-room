import { BrandLockup } from "@/components/brand-lockup";
import { SiteFooter } from "@/components/site-footer";
import { WaitlistFlow } from "@/components/waitlist-flow";

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "The Letter Room",
        url: "https://www.jointheletterroom.com",
        logo: "https://www.jointheletterroom.com/the-letter-room-logo.png",
        sameAs: ["https://www.instagram.com/jointheletterroom/"],
        contactPoint: [
          {
            "@type": "ContactPoint",
            email: "hello@jointheletterroom.com",
            contactType: "customer support",
          },
        ],
      },
      {
        "@type": "WebSite",
        name: "The Letter Room",
        url: "https://www.jointheletterroom.com",
        description:
          "A monthly mailed letter subscription for people craving more depth, reflection, and conversation in a chronically online world.",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[var(--color-brand)] text-[var(--color-background)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="relative mx-auto flex min-h-screen w-full max-w-[96rem] flex-col px-5 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-10">
        <header className="pt-2 sm:pt-3 lg:pt-4">
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
