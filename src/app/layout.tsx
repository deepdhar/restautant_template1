import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import AOSProvider from "@/components/providers/AOSProvider";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Drizzle — Premium Restaurant Experience",
  description:
    "Experience the Language of Taste at Drizzle. A premium dining destination blending tradition and innovation to create unforgettable dining experiences. Reserve your table today.",
  keywords:
    "Drizzle restaurant, fine dining, premium restaurant, reserve a table, culinary experience",
  openGraph: {
    title: "Drizzle — Premium Restaurant Experience",
    description:
      "Experience the Language of Taste. Reserve your table at Drizzle — where every visit becomes a great memory.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>
        <AOSProvider>{children}</AOSProvider>
      </body>
    </html>
  );
}
