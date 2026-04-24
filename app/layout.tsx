import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Letter Room",
  description:
    "A mailed letter for people craving more depth and conversation in a chronically online world.",
  metadataBase: new URL("https://www.jointheletterroom.com"),
  alternates: {
    canonical: "https://www.jointheletterroom.com",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "The Letter Room",
    description:
      "A mailed letter for people craving more depth and conversation in a chronically online world.",
    siteName: "The Letter Room",
    type: "website",
    url: "https://www.jointheletterroom.com",
    images: [
      {
        url: "/opengraph-image.png",
        width: 3500,
        height: 1500,
        type: "image/png",
        alt: "The Letter Room. Something worth talking about.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Letter Room",
    description:
      "A mailed letter for people craving more depth and conversation in a chronically online world.",
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
