import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Chatbot from "@/components/chatbot";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anagha Balanced Bites | Nutritious & Wholesome Eating",
  description:
    "Anagha Balanced Bites offers fresh, balanced food and nutrition solutions designed for your lifestyle. Explore meal bowls, subscription plans, and franchise opportunities.",
  keywords: [
    "healthy food",
    "balanced diet",
    "meal subscriptions",
    "wellness meals",
    "Anagha Balanced Bites",
    "hyderabad health food",
  ],
  openGraph: {
    title: "Anagha Balanced Bites | Good Food for a Balanced Life",
    description:
      "Simple food, better choices. Wholesome, nutritious, and delicious meal options.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#FAF6F0] text-[#49352B] antialiased selection:bg-[#C64C2C]/20 selection:text-[#C64C2C]">
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
