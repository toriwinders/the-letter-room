import { FaqList } from "@/components/faq-list";
import { ProductPreview } from "@/components/product-preview";
import { EmailCapture } from "@/components/email-capture";
import { StickyCta } from "@/components/sticky-cta";

export function WaitlistFlow() {
  return (
    <div className="mx-auto w-full max-w-[64rem] text-center">
      <div className="mx-auto max-w-[44rem]">
        <div className="hero-card">
          <h1
            id="waitlist-heading"
            className="copy-rhythm mx-auto max-w-[23ch] text-balance text-[1.5rem] leading-[1.02] sm:max-w-[28ch] sm:text-[1.85rem] md:max-w-[38rem] md:text-[2.1rem] md:leading-[1.03] lg:max-w-[43.75rem]"
          >
            The good kind of mail.
          </h1>

          <div className="copy-rhythm mx-auto mt-5 max-w-[38rem] text-[1.05rem] leading-[1.55] sm:text-[1.1rem]">
            <p>
              A personal essay and a conversation card, mailed to your
              door every month.
            </p>
            <p className="mt-4">
              Read the letter with your morning coffee. Bring the card
              to your next dinner.
            </p>
            <p className="mt-4">
              It&apos;s the kind of thing you&apos;ll want to organize
              something around.
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-[28rem] sm:mt-10">
            <EmailCapture
              buttonText="I want in"
              successMessage="You're on the list. Keep an eye on your inbox."
            />
          </div>
        </div>
      </div>

      {/* The Idea */}
      <section
        aria-labelledby="the-idea-heading"
        className="section-band section-band-idea section-gap mt-10 text-center sm:mt-14"
      >
        <div className="section-inner">
          <div className="mx-auto max-w-[48rem]">
            <p className="eyebrow">Why I started this</p>
            <h2
              id="the-idea-heading"
              className="section-title copy-rhythm mx-auto mt-3 max-w-[38rem] sm:max-w-[43.75rem]"
            >
              You know that feeling after a really good conversation?
            </h2>

            <div className="copy-rhythm mx-auto mt-4 max-w-[48rem] text-[1.05rem] leading-[1.6] text-[var(--color-muted)] sm:text-[1.1rem]">
              <p>
                When you drove home still thinking about what somebody said after
                staying at the table way too long.
              </p>
              <p className="mt-4">
                I started The Conversation Club because I want more of that.
                And in a world where so much life has moved onto a screen,
                I think a lot of us do.
              </p>
              <p className="mt-4">
                A monthly reason to create more of those moments.
              </p>
            </div>

            {/* Author card */}
            <div className="mx-auto mt-8 max-w-[34rem]">
              <a
                href="https://toriwinders.com"
                target="_blank"
                rel="noreferrer"
                className="author-card"
              >
                <div className="flex-1 text-left">
                  <p className="copy-rhythm text-[0.95rem] font-semibold text-[var(--color-ink)]">
                    Written by Tori Winders
                  </p>
                  <p className="copy-rhythm mt-0.5 text-[0.85rem] text-[var(--color-muted)]">
                    Writer, optimizer, and someone who thinks way too much about
                    conversation.
                  </p>
                </div>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 shrink-0 text-[var(--color-brand)]"
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
              className="section-title copy-rhythm mx-auto mt-3"
            >
              For women who love beautiful things and even better conversations.
            </h2>

            <div className="copy-rhythm mx-auto mt-6 max-w-[48rem] text-[1.05rem] leading-[1.6] text-[var(--color-muted)] sm:text-[1.1rem]">
              <p>
                If you still get excited about something arriving in the mail.
                If you&apos;re the one who brings the question nobody else would
                have thought to ask. If you&apos;ve ever driven home from a dinner
                feeling like your cup was completely full.
              </p>
              <p className="mt-4">
                This is a small, beautiful, offline thing for people who already
                know they want more of the real stuff.
              </p>
            </div>

            <div className="mx-auto mt-8 max-w-[28rem]">
              <EmailCapture
                buttonText="Save my spot"
                successMessage="You're on the list. Keep an eye on your inbox."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section
        aria-labelledby="founding-member-heading"
        className="section-band section-band-offer section-gap text-center"
      >
        <div className="section-inner">
          <div className="offer-card">
            <p className="eyebrow">Limited to 100 founding members</p>
            <h2
              id="founding-member-heading"
              className="section-title copy-rhythm mx-auto mt-3 max-w-[44rem] sm:max-w-[44rem]"
            >
              This isn&apos;t launching to everyone.
            </h2>

            <div className="copy-rhythm mx-auto mt-4 max-w-[36rem] text-[1.05rem] leading-[1.55] sm:text-[1.1rem]">
              <p>
                The first 100 people on the waitlist become founding members.
                You&apos;ll get first access, a locked-in price, and a say in
                what this thing becomes.
              </p>
              <p className="mt-4">
                If you&apos;re reading this, the door is still open.
              </p>
            </div>

            <div className="mx-auto mt-8 max-w-[28rem]">
              <EmailCapture
                buttonText="Get me on the list"
                successMessage="You're on the list. Keep an eye on your inbox."
                variant="dark"
              />
            </div>
          </div>
        </div>
      </section>

      <FaqList />

      {/* Email capture */}
      <section className="section-band section-gap text-center" style={{ background: "var(--color-idea-bg)" }}>
        <div className="section-inner">
          <div className="mx-auto max-w-[34rem]">
            <p className="eyebrow">Not ready yet?</p>
            <h2 className="section-title copy-rhythm mx-auto mt-3 max-w-[38rem]">
              Get the first conversation prompt free.
            </h2>
            <div className="mx-auto mt-6 max-w-[28rem]">
              <EmailCapture
                endpoint="/api/free-prompt"
                successMessage="Check your inbox — your first prompt is on the way."
              />
            </div>
          </div>
        </div>
      </section>

      <StickyCta />
    </div>
  );
}
