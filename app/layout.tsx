import type { Metadata } from "next";
import "./globals.css";

const siteTitle = "The Conversation Club";
const siteDescription =
  "A monthly mailed letter and conversation card for people who want more depth, connection, and in-person conversation.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  metadataBase: new URL("https://conversationclub.co"),
  applicationName: siteTitle,
  alternates: {
    canonical: "https://conversationclub.co",
  },
  keywords: [
    "The Conversation Club",
    "conversation club",
    "conversation cards",
    "mailed letter subscription",
    "monthly letter",
    "analog subscription",
    "mail subscription",
    "deeper conversations",
    "offline connection",
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
    title: siteTitle,
    description: siteDescription,
    siteName: siteTitle,
    type: "website",
    locale: "en_US",
    url: "https://conversationclub.co",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "The Conversation Club. Something worth talking about.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/twitter-image.png",
        alt: "The Conversation Club. Something worth talking about.",
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
