import Link from "next/link";

const CHECKOUT_URL = "https://buy.stripe.com/14A14mfwB4vnfFfgjY4gg03";

type JoinButtonProps = {
  text?: string;
  variant?: "light" | "dark";
};

export function JoinButton({
  text = "Join Conversation Club",
  variant = "light",
}: JoinButtonProps) {
  const isDark = variant === "dark";

  return (
    <Link
      href={CHECKOUT_URL}
      target="_blank"
      rel="noreferrer"
      className={`inline-block rounded-[4px] px-8 py-3.5 text-center text-[0.9375rem] font-medium transition-colors ${
        isDark
          ? "bg-[var(--color-ivory)] text-[var(--color-plum)] hover:bg-[var(--color-gold)]"
          : "button-primary"
      }`}
      style={{ letterSpacing: "0.03em" }}
    >
      {text}
    </Link>
  );
}
