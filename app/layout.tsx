import type { Metadata } from "next";
import "./globals.css";

const siteTitle = "The Letter Room";
const siteDescription =
  "A monthly mailed letter subscription for people craving more depth, reflection, and conversation in a chronically online world.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  metadataBase: new URL("https://www.jointheletterroom.com"),
  applicationName: siteTitle,
  alternates: {
    canonical: "https://www.jointheletterroom.com",
  },
  keywords: [
    "The Letter Room",
    "mailed letter subscription",
    "monthly letter subscription",
    "conversation cards",
    "analog subscription",
    "mail subscription",
    "thoughtful gifts",
    "depth and conversation",
  ],
  authors: [{ name: "Tori Winders", url: "https://www.jointheletterroom.com" }],
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
    url: "https://www.jointheletterroom.com",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "The Letter Room. Something worth talking about.",
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
        alt: "The Letter Room. Something worth talking about.",
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
