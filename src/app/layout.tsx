import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nathasa — Digital Product & UI/UX Designer Portfolio",
  description: "Modern dark & wine-maroon portfolio showcasing featured digital product design projects, career experience, achievements, and tools.",
  keywords: ["Nathasa", "Portfolio", "UI/UX Designer", "Product Designer", "Design Systems"],
  authors: [{ name: "Nathasa" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <div className="ambient-glow-1" aria-hidden="true" />
        <div className="ambient-glow-2" aria-hidden="true" />
        <div className="ambient-glow-3" aria-hidden="true" />
        <div className="grid-pattern" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
