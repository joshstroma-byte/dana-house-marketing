import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dana House — Charity intelligence for serious philanthropists",
  description:
    "Enriched data on every UK registered charity, with the scoring, signals, and analytics that turn philanthropic giving into a disciplined practice.",
  openGraph: {
    title: "Dana House",
    description: "Charity intelligence for serious philanthropists",
    type: "website",
    locale: "en_GB",
    siteName: "Dana House",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
