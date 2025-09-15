import "./globals.css";
import { Toaster } from "@/components/ui/sonner"

export const metadata = {
  metadataBase: new URL("https://atqiya.space"),
  title: {
    default: "Atqiya's Portfolio",
    template: "%s — Atqiya Haydar Luqman",
  },
  description:
    "Official portfolio of Atqiya Haydar Luqman — UI/UX Designer & Frontend Engineer. Selected works, case studies, and contact.",
  keywords: [
    // Variasi nama (1–3 kata) + intent umum
    "Atqiya", "Atqiya Haydar", "Atqiya Luqman", "Atqiya Haydar Luqman",
    "Atqiya H Luqman", "Atqiya HL",
    "Atqiya portfolio", "portfolio Atqiya", "Atqiya UI UX",
    "Atqiya product design", "Atqiya frontend",
    // Bahasa Indonesia & Inggris
    "UI/UX Designer", "Product Designer", "Frontend Engineer",
    "Desainer UI UX", "Portofolio Desain UI UX",
  ],
  authors: [{ name: "Atqiya Haydar Luqman", url: "https://atqiya.space" }],
  creator: "Atqiya Haydar Luqman",
  publisher: "Atqiya Haydar Luqman",
  category: "portfolio",
  alternates: {
    canonical: "https://atqiya.space",
    languages: {
      "en-US": "https://atqiya.space/en",
      "id-ID": "https://atqiya.space",
    },
  },
  openGraph: {
    type: "website",
    url: "https://atqiya.space",
    siteName: "Atqiya Haydar Luqman — Portfolio",
    title: "Atqiya Haydar Luqman — UI/UX Designer & Frontend Engineer",
    description:
      "Explore the work of Atqiya Haydar: UI/UX case studies, frontend projects, and ways to get in touch.",
    images: [
      {
        url: "/og/atqiya-og.jpg", // ganti ke path OG image kamu (1200x630)
        width: 1200,
        height: 630,
        alt: "Atqiya Haydar Luqman — Portfolio",
      },
    ],
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atqiya Haydar Luqman — Portfolio",
    description:
      "UI/UX Designer & Frontend Engineer. Selected works, case studies, and contact.",
    images: ["/og/atqiya-og.jpg"], // sama dengan OG di atas
    creator: "@yourhandle", // opsional
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    // isi kalau sudah punya token verifikasi
    google: "GOOGLE_SITE_VERIFICATION_TOKEN",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="font-sans bg-white"
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
