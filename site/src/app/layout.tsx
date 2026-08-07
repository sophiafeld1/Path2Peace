import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Path to Peace Psychotherapy | Trauma Therapy in Reston, VA",
    template: "%s | Path to Peace Psychotherapy",
  },
  description:
    "A warm welcoming practice of trauma specialists offering treatment for kids, teens, adults, and families in Reston, Virginia. EMDR, IFS, and more.",
  metadataBase: new URL("https://pathtopeacepsychotherapy.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Path to Peace Psychotherapy",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dmSans.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
