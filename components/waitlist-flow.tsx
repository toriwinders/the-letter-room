import Link from "next/link";
import { FaqList } from "@/components/faq-list";
import { ProductPreview } from "@/components/product-preview";

const STRIPE_CHECKOUT =
  "https://buy.stripe.com/4gMfZg3NT2nf64FffU4gg02";

export function WaitlistFlow() {
  return (
    <div className="mx-auto w-full max-w-[64rem] text-center">
      <div className="mx-auto max-w-[44rem]">
        <div className="hero-card">
          <p className="eyebrow">Mailed monthly. Three dollars.</p>
          <h1
            id="waitlist-heading"
            className="copy-rhythm mx-auto mt-4 max-w-[23ch] text-balance text-[1.5rem] leading-[1.02] sm:max-w-[28ch] sm:text-[1.85rem] md:max-w-[38rem] md:text-[2.1rem] md:leading-[1.03] lg:max-w-[43.75rem]"
          >
            The good kind of mail.
          </h1>

          <p className="copy-rhythm mx-auto mt-5 max-w-[34rem] text-[0.95rem] leading-[1.55] sm:text-[1rem]">
            Every month, something beautiful shows up at your doorstep. A
            personal essay and a conversation card that turns a good dinner into
            a great one. Read the letter on a Sunday with your morning coffee.
            Bring the card to your next dinner. Or a long walk. Or a night on
            the couch with someone you haven&apos;t really talked to in a while.
            It&apos;s the kind of thing you&apos;ll want to organize something
            around.
          </p>

          <div className="mx-auto mt-8 max-w-[28rem] sm:mt-10">
            <Link
              className="button-primary inline-flex min-h-12 w-full items-center justify-center px-6 py-3 text-base"
              href={STRIPE_CHECKOUT}
            >
              Join — $3/month
            </Link>
          </div>
        </div>
      </div>

      {/* The Idea */}
      <section
        aria-labelledby="the-idea-heading"
        className="section-band section-band-idea section-gap text-center"
      >
        <div className="section-inner">
          <div className="mx-auto max-w-[44rem]">
            <p className="eyebrow">Why I started this</p>
            <h2
              id="the-idea-heading"
              className="section-title copy-rhythm mx-auto mt-3 max-w-[38rem] sm:max-w-[43.75rem]"
            >
              You know that feeling after a really good conversation?
            </h2>

            <div className="copy-rhythm mx-auto mt-4 max-w-[44rem] text-[0.95rem] leading-[1.6] text-[var(--color-muted)] sm:text-[1rem]">
              <p>
                Where you drive home still thinking about what somebody said.
                Where you stayed at the table way too long and didn&apos;t mind
                at all. Where something shifted, even slightly, in how you see
                something.
              </p>
              <p className="mt-4">
                I started The Conversation Club because I want more of that. I
                think a lot of us do&hellip; especially right now, when so much
                of life has moved onto a screen and the really good stuff, the
                slow, face-to-face, laughing-until-late stuff, takes more
                intention to actually make happen.
              </p>
              <p className="mt-4">
                A monthly reason to create more of those moments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ProductPreview />

      {/* Who This Is For */}
      <section
        aria-labelledby="who-heading"
        className="section-band section-band-who section-gap text-center"
      >
        <div className="section-inner">
          <div className="mx-auto max-w-[44rem]">
            <p className="eyebrow">Is this you?</p>
            <h2
              id="who-heading"
              className="section-title copy-rhythm mx-auto mt-3 max-w-[38rem] sm:max-w-[43.75rem]"
            >
              For women who love beautiful things and even better conversations.
            </h2>

            <div className="copy-rhythm mx-auto mt-4 max-w-[44rem] text-[0.95rem] leading-[1.6] text-[var(--color-muted)] sm:text-[1rem]">
              <p>
                If you still get genuinely excited about something arriving in
                the mail. If you&apos;re the person who brings a question to the
                group hang that nobody else would have thought to ask. If
                you&apos;ve ever driven home from a girls&apos; night feeling
                like your cup was completely full — and found yourself thinking,
                we need to do that more.
              </p>
              <p className="mt-4">
                We&apos;re all spending more of our lives on screens than we
                planned to. Most of us feel it. The Conversation Club isn&apos;t
                a lecture about that. It&apos;s just a small, beautiful, offline
                thing for people who already know they want more of the real
                stuff.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join */}
      <section
        aria-labelledby="founding-member-heading"
        className="section-band section-band-offer section-gap text-center"
      >
        <div className="section-inner">
          <div className="offer-card">
            <p className="eyebrow">Founding members</p>
            <h2
              id="founding-member-heading"
              className="section-title copy-rhythm mx-auto mt-3 max-w-[44rem] sm:max-w-[44rem]"
            >
              Three dollars a month, for as long as you stay.
            </h2>

            <p className="copy-rhythm mx-auto mt-4 max-w-[34rem] text-[0.95rem] leading-[1.55] sm:text-[1rem]">
              The first 500 members lock in $3/month forever. After that it
              moves to $5. Cancel anytime — before the end of the month, you
              won&apos;t be charged for the next one. Letters go out the first
              week of every month to the US, Canada, Mexico, and the UK.
            </p>

            <div className="mx-auto mt-8 max-w-[28rem]">
              <Link
                className="button-primary inline-flex min-h-12 w-full items-center justify-center px-6 py-3 text-base"
                href={STRIPE_CHECKOUT}
              >
                Join the club — $3/month
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FaqList />

      <div className="mx-auto mt-10 max-w-[28rem] sm:mt-12">
        <Link
          className="button-primary inline-flex min-h-12 w-full items-center justify-center px-6 py-3 text-base"
          href={STRIPE_CHECKOUT}
        >
          Join the club — $3/month
        </Link>
      </div>
    </div>
  );
}
