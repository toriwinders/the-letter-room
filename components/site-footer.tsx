import Link from "next/link";

export function SiteFooter() {
  return (
    <div className="section-band mt-20 sm:mt-24" style={{ background: "var(--color-ink)" }}>
      <footer className="mx-auto w-full max-w-[64rem] px-5 pt-8 pb-6 text-[1rem] text-[var(--color-background)] sm:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-[22rem]">
            <p className="brand-name text-[1rem] leading-relaxed">Conversation Club</p>
            <p className="mt-2 leading-relaxed">
              A personal essay and a conversation card, mailed to your door every month.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:items-end">
            <Link className="footer-link" href="mailto:hello@conversationclub.co">
              hello@conversationclub.co
            </Link>
            <Link
              className="footer-link"
              href="https://www.instagram.com/conversation__club"
              target="_blank"
              rel="noreferrer"
            >
              @conversation__club
            </Link>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <Link className="footer-link" href="/terms">
                Terms
              </Link>
              <Link className="footer-link" href="/privacy">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
