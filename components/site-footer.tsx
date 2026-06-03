import Link from "next/link";

export function SiteFooter() {
  return (
    <div className="section-band mt-0" style={{ background: "var(--color-plum)" }}>
      <footer className="mx-auto w-full max-w-[64rem] px-5 pt-10 pb-8 text-[var(--color-ivory)] sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-[22rem]">
            <p className="brand-name">Conversation Club</p>
            <p className="mt-2 text-[0.875rem] leading-relaxed text-[var(--color-ivory)]" style={{ opacity: 0.8 }}>
              A personal essay and a conversation card, mailed to your door every month.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:items-end">
            <Link className="footer-link text-[0.875rem]" href="mailto:hello@conversationclub.co">
              hello@conversationclub.co
            </Link>
            <Link
              className="footer-link text-[0.875rem]"
              href="https://www.instagram.com/conversation__club"
              target="_blank"
              rel="noreferrer"
            >
              @conversation__club
            </Link>
            <div className="mt-1 flex flex-wrap gap-x-4 gap-y-2">
              <Link className="footer-link-secondary text-[0.875rem]" href="/terms">
                Terms
              </Link>
              <Link className="footer-link-secondary text-[0.875rem]" href="/privacy">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
