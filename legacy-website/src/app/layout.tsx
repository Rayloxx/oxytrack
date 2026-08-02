import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "OxyTrack Technologies | Real-Time Medical Gas Monitoring Kenya",
  description:
    "OxyTrack Technologies delivers IoT-based medical gas pipeline monitoring for Kenyan hospitals. Real-time oxygen pressure monitoring, ward analytics, leak detection, and predictive insights from tank to ward.",
  keywords: [
    "Oxygen Monitoring Kenya",
    "Medical Gas Monitoring",
    "Hospital Oxygen Management",
    "Medical Gas Pipeline Monitoring",
    "Oxygen Analytics",
    "Healthcare IoT Kenya",
    "Biomedical Technology",
    "Oxygen SaaS Platform",
    "Medical Oxygen Kenya",
    "Hospital Technology Kenya",
  ],
  authors: [{ name: "OxyTrack Technologies" }],
  creator: "OxyTrack Technologies",
  publisher: "OxyTrack Technologies",
  metadataBase: new URL("https://oxytrack.co.ke"),
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://oxytrack.co.ke",
    siteName: "OxyTrack Technologies",
    title: "OxyTrack Technologies | From Tank to Ward. Every Litre Accounted For.",
    description:
      "Kenyan hospitals spend millions on medical oxygen, yet once it enters the building, visibility disappears. OxyTrack delivers real-time monitoring, analytics, and alerts from tank to ward.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OxyTrack Technologies - Real-Time Medical Gas Monitoring",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OxyTrack Technologies | Medical Gas Intelligence",
    description:
      "Real-time oxygen monitoring, ward analytics, and predictive insights for Kenyan hospitals.",
    images: ["/og-image.png"],
    creator: "@OxyTrackKE",
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
  verification: {
    google: "oxytrack-google-verification",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "OxyTrack Technologies",
  description:
    "OxyTrack Technologies delivers IoT-based medical gas pipeline monitoring systems and cloud software for hospitals in Kenya.",
  url: "https://oxytrack.co.ke",
  logo: "https://oxytrack.co.ke/logo.png",
  foundingDate: "2024",
  foundingLocation: {
    "@type": "Place",
    addressCountry: "KE",
    addressLocality: "Nairobi",
  },
  areaServed: {
    "@type": "Country",
    name: "Kenya",
  },
  sameAs: [
    "https://linkedin.com/company/oxytrack-technologies",
    "https://twitter.com/OxyTrackKE",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "info@oxytrack.co.ke",
    availableLanguage: ["English", "Swahili"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
