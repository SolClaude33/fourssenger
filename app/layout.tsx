import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Fourssenger - Crypto Messenger",
  description: "Connect with the crypto community in real-time. A modern messenger inspired by MSN, built for traders, developers, and crypto enthusiasts.",
  authors: [{ name: "Fourssenger Team" }],
  creator: "Fourssenger",
  publisher: "Fourssenger",
  icons: {
    icon: [
      { url: "/4logo.png", sizes: "any", type: "image/png" },
    ],
    shortcut: "/4logo.png",
    apple: "/4logo.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Fourssenger - Crypto Messenger",
    description: "Connect with the crypto community in real-time. A modern messenger inspired by MSN.",
    url: "https://fourssenger.vercel.app",
    siteName: "Fourssenger",
    images: [
      {
        url: "/4logo.png",
        width: 1200,
        height: 630,
        alt: "Fourssenger Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fourssenger - Crypto Messenger",
    description: "Connect with the crypto community in real-time. A modern messenger inspired by MSN.",
    images: ["/4logo.png"],
    creator: "@tu_twitter", // Cambia esto por tu Twitter real
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
