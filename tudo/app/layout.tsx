import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "নামাতা",
  description: "এখানে যেকোনো নামাতা, বানানো যায়!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <nav className="bg-red-300 py-5 px-8 text-3xl font-bold text-blue-700 border-b-7 border-amber-700">
          নামাতা
        </nav>
        {children}
      </body>
    </html>
  );
}
