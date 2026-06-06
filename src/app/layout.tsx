import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Moments in Voice — Gesang und Worte für emotionale Momente",
  description:
    "Yvonne & Kerstin Schwuchow begleiten euch mit Live-Gesang und persönlichen Reden bei Hochzeiten, Taufen, Trauerfeiern und besonderen Anlässen.",
  keywords: [
    "Hochzeitssängerin",
    "Freie Rednerin",
    "Trauung",
    "Live-Gesang",
    "Hochzeit",
    "Trauerfeier",
    "Taufe",
    "Zeremonie",
    "Bretten",
    "Karlsruhe",
  ],
  openGraph: {
    title: "Moments in Voice — Gesang und Worte für emotionale Momente",
    description:
      "Zwei Stimmen für eure Liebe(n). Persönliche Zeremonien mit Herz, Humor und Live-Gesang.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${playfair.variable} ${montserrat.variable} antialiased`}
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
