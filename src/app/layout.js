import "./globals.css";
import localFont from "next/font/local";

import { ThemeProvider, theme } from "@/components/MaterialTW";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Tortech Guides - Free carding tutorials",
  description:
    "Carding methods, free guides, logs, PayPal transfers, cash app transfers, CC's, fullz, clone cards, and more. Join the free community and escape your 9-5.",
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Navbar />
          <div className="w-full min-h-screen font-[family-name:var(--font-geist-sans)]">
            {children}
          </div>
          <Footer />
        </body>
      </html>
    </ThemeProvider>
  );
}
