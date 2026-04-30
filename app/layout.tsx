import type { Metadata } from "next";
import { Inter, Space_Grotesk, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap"
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://naughyfication.dev"),
  title: {
    default: "Send Naughtyfication",
    template: "%s | Naughyfication"
  },
  description:
    "Production-grade notification infrastructure with retries, tracking, DLQs, webhooks, metrics, and reliability built in.",
  keywords: [
    "notifications",
    "developer tools",
    "notification API",
    "webhooks",
    "DLQ",
    "observability",
    "open source"
  ],
  authors: [{ name: "Naughyfication" }],
  creator: "Naughyfication",
  openGraph: {
    title: "Send Naughtyfication",
    description:
      "One API for resilient multi-channel notifications across email, SMS, Slack, Telegram, WhatsApp, and more.",
    url: "https://naughyfication.dev",
    siteName: "Naughyfication",
    type: "website",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "Naughyfication developer-first notification infrastructure"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Send Naughtyfication",
    description:
      "Open-source notification infrastructure with retries, queues, DLQs, webhooks, and metrics built in.",
    images: ["/og.svg"]
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable} bg-background font-sans text-foreground antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
