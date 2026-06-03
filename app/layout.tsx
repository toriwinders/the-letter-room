import type { Metadata } from "next";
import "./globals.css";

const siteTitle = "Conversation Club — A personal essay and a conversation card, mailed monthly";
const siteDescription =
  "A personal essay and a conversation card, mailed to your door every month. For women who love beautiful things and even better conversations. $7/mo for founding members.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  metadataBase: new URL("https://conversationclub.co"),
  applicationName: siteTitle,
  alternates: {
    canonical: "https://conversationclub.co",
  },
  keywords: [
    "Conversation Club",
    "conversation cards",
    "monthly letter subscription",
    "mailed letter",
    "personal essay subscription",
    "analog subscription box",
    "conversation starters",
    "dinner party questions",
    "offline connection",
    "snail mail subscription",
    "women subscription box",
    "Tori Winders",
  ],
  authors: [{ name: "Tori Winders", url: "https://conversationclub.co" }],
  creator: "Tori Winders",
  publisher: siteTitle,
  category: "Lifestyle",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Conversation Club — The good kind of mail.",
    description: "A personal essay and a conversation card, mailed to your door every month. Join the founding 100.",
    siteName: "Conversation Club",
    type: "website",
    locale: "en_US",
    url: "https://conversationclub.co",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Conversation Club — The good kind of mail.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Conversation Club — The good kind of mail.",
    description: "A personal essay and a conversation card, mailed to your door every month. Join the founding 100.",
    images: [
      {
        url: "/twitter-image.png",
        alt: "Conversation Club — The good kind of mail.",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
