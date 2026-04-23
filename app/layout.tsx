import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Letter Room",
  description:
    "A monthly mailed letter for people craving more depth and conversation in a chronically online world.",
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
