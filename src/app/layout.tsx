import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dovix Media | Premium Digital Marketing & Web Design Agency",
  description: "Grow Faster, Rank Higher, and Convert Better with Dovix Media. We specialize in high-converting website design, SEO, Google Ads, and Meta Ads campaigns.",
  keywords: ["digital marketing agency", "web design", "SEO agency", "Google Ads management", "Facebook Ads", "Instagram marketing", "Dovix Media", "local SEO"],
  authors: [{ name: "Dovix Media Team" }],
  openGraph: {
    title: "Dovix Media | Premium Digital Marketing & Web Design Agency",
    description: "Scale your revenue with SEO, Meta Ads, and premium web design from Dovix Media.",
    url: "https://dovixmedia.com",
    siteName: "Dovix Media",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dovix Media | Premium Digital Marketing Agency",
    description: "Grow Faster, Rank Higher, and Convert Better with Dovix Media.",
  },
  alternates: {
    canonical: "https://dovixmedia.com",
  },
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="font-sans antialiased min-h-screen bg-white text-gray-900 dark:bg-dark-bg dark:text-gray-100 transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
