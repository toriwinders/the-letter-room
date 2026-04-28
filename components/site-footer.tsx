import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mx-auto mt-20 w-full max-w-[64rem] border-t border-[var(--color-line)] pt-6 pb-2 text-[0.96rem] text-[var(--color-background)] sm:mt-24">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-[22rem]">
          <p className="brand-name text-[1rem] leading-relaxed">The Letter Room</p>
          <p className="mt-2 leading-relaxed">
            A monthly letter for people craving more depth and conversation in a
            chronically online world.
          </p>
        </div>

        <div className="flex flex-col gap-2 sm:items-end">
          <Link className="footer-link" href="mailto:hello@jointheletterroom.com">
            hello@jointheletterroom.com
          </Link>
          <Link
            className="footer-link"
            href="https://www.instagram.com/jointheletterroom"
            target="_blank"
            rel="noreferrer"
          >
            @jointheletterroom
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
  );
}
