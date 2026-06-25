import { FaqList } from "@/components/faq-list";
import { ProductPreview } from "@/components/product-preview";
import { Testimonials } from "@/components/testimonials";
import { JoinButton } from "@/components/join-button";
import { StickyCta } from "@/components/sticky-cta";

export function WaitlistFlow() {
  return (
    <div className="mx-auto w-full max-w-[64rem] text-center">
      {/* Hero */}
      <div className="hero-section">
        <h1 id="waitlist-heading">
          The good kind of mail.
        </h1>

        <div className="mx-auto mt-6 max-w-[48rem] text-[1.125rem] leading-[1.65] text-[var(--color-espresso)]">
          <p>
            A personal essay and a conversation card, mailed to your door every month.
          </p>
          <p className="mt-4">
            Read the letter with your morning coffee. Bring the card to your next dinner.
          </p>
          <p className="mt-4">
            It&apos;s the kind of thing you&apos;ll want to organize something around.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-[40rem] overflow-hidden rounded-[4px]">
          <img
            src="/images/hero-cards.jpg"
            alt="The Conversation Club letter and conversation cards on a table set for dinner"
            className="w-full"
          />
        </div>

        <div className="mx-auto mt-10">
          <JoinButton />
        </div>
      </div>

      {/* The Idea */}
      <section
        aria-labelledby="the-idea-heading"
        className="section-band section-band-idea section-gap mt-16 text-center sm:mt-20"
      >
        <div className="section-inner">
          <div className="mx-auto max-w-[56rem]">
            <p className="eyebrow">Why I started this</p>
            <h2
              id="the-idea-heading"
              className="section-title mx-auto mt-4 max-w-[48rem]"
            >
              You know that feeling after a really good conversation?
            </h2>

            <div className="mx-auto mt-6 max-w-[48rem] text-[1.125rem] leading-[1.65] text-[var(--color-ivory)]" style={{ opacity: 0.88 }}>
              <p>
                When you drove home still thinking about what somebody said after staying at the table way too long.
              </p>
              <p className="mt-5">
                I started The Conversation Club because I want more of that. And in a world where so much life has moved onto a screen, I think a lot of us do.
              </p>
              <p className="mt-5">
                So this is a reason to create more of those moments.
              </p>
            </div>

            <div className="mx-auto mt-10 max-w-[34rem] overflow-hidden rounded-[4px]">
              <img
                src="/images/flowers.jpg"
                alt="A vase of ranunculus in soft morning light"
                loading="lazy"
                className="w-full"
              />
            </div>

            {/* Author card */}
            <div className="mx-auto mt-10 max-w-[34rem]">
              <a
                href="https://toriwinders.com"
                target="_blank"
                rel="noreferrer"
                className="author-card"
              >
                <div className="flex-1 text-left">
                  <p className="text-[0.95rem] text-[var(--color-ivory)]" style={{ fontFamily: "var(--font-brand)" }}>
                    Written by Tori Winders
                  </p>
                  <p className="mt-0.5 text-[0.85rem] text-[var(--color-ivory)]" style={{ opacity: 0.7 }}>
                    Writer, optimizer, and someone who thinks way too much about conversation.
                  </p>
                </div>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 shrink-0 text-[var(--color-ivory)]"
                  style={{ opacity: 0.5 }}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <ProductPreview />

      <Testimonials />

      {/* Who This Is For */}
      <section
        aria-labelledby="who-heading"
        className="section-band section-band-who section-gap text-center"
      >
        <div className="section-inner">
          <div className="mx-auto max-w-[56rem]">
            <p className="eyebrow">Is this you?</p>
            <h2
              id="who-heading"
              className="section-title mx-auto mt-4 max-w-[48rem]"
            >
              For women who love beautiful things and&nbsp;even&nbsp;better&nbsp;conversations.
            </h2>

            <div className="mx-auto mt-6 max-w-[48rem] text-[1.125rem] leading-[1.65] text-[var(--color-espresso)]">
              <p>
                If you still get excited about something arriving in the mail. If you&apos;re the one who brings the question nobody else would have thought to ask. If you&apos;ve ever driven home from a dinner feeling like your cup was completely full.
              </p>
              <p className="mt-5">
                This is a small, beautiful, offline thing for people who already know they want more of the real stuff.
              </p>
            </div>

            <div className="mx-auto mt-10 max-w-[44rem] overflow-hidden rounded-[4px]">
              <img
                src="/images/table-placecard.jpg"
                alt="A dinner table set with place cards, candles, and a charcuterie board"
                loading="lazy"
                className="w-full"
              />
            </div>

            <div className="mx-auto mt-10">
              <JoinButton />
            </div>
          </div>
        </div>
      </section>

      {/* Founding Members */}
      <section
        aria-labelledby="founding-member-heading"
        className="section-band section-band-offer section-gap text-center"
      >
        <div className="section-inner">
          <div className="offer-section">
            <p className="eyebrow">Limited to 100 founding members</p>
            <h2
              id="founding-member-heading"
              className="section-title mx-auto mt-4 max-w-[48rem]"
            >
              This isn&apos;t launching to everyone.
            </h2>

            <div className="mx-auto mt-6 max-w-[48rem] text-[1.125rem] leading-[1.65]">
              <p>
                The first 100 members get a locked-in price and a say in what this thing becomes.
              </p>
              <p className="mt-5">
                If you&apos;re reading this, the door is still open.
              </p>
              <p className="mt-5 text-[1.15rem] font-medium text-[var(--color-ivory)]">
                $7/month. Locked in forever.
              </p>
            </div>

            <div className="mx-auto mt-10">
              <JoinButton text="Join Conversation Club" variant="dark" />
            </div>

            <div className="mx-auto mt-12 max-w-[40rem] overflow-hidden rounded-[4px]">
              <img
                src="/images/dinner-burrata.jpg"
                alt="A candlelit table with burrata, bread, and white flowers"
                loading="lazy"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <FaqList />

      <StickyCta />
    </div>
  );
}
