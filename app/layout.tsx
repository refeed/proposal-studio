import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./component/Navbar";

const alliance = localFont({
  src: [
    {
      path: "../public/font/Alliance No.1 Regular.otf",
      style: "normal",
      weight: "400",
    },
    {
      path: "../public/font/Alliance No.1 Medium.otf",
      style: "normal",
      weight: "500",
    },
    {
      path: "../public/font/Alliance No.1 SemiBold.otf",
      style: "normal",
      weight: "600",
    },
    {
      path: "../public/font/Alliance No.1 Bold.otf",
      style: "normal",
      weight: "700",
    },
  ],
});

export const metadata: Metadata = {
  title: "Proposal Studio | Jasa Proposal Profesional",
  description: "Jasa Proposal Profesional",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={alliance.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
