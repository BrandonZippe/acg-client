import type { Metadata } from "next";
import "./globals.css";
import Footer from "./footer";

export const metadata: Metadata = {
  title: "Audio Collective Group",
  description: "Audio Collective Group is a family of passionate brands united by one mission: to empower the people who make music.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
