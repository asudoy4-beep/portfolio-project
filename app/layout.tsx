import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ahmed Shahariar Udoy | IoT & Robotics Engineer",
  description:
    "IoT and Robotics Engineering student at the University of Frontier Technology. Building intelligent monitoring systems with ESP32, embedded hardware, and machine learning.",
  keywords: [
    "IoT",
    "Robotics",
    "Embedded Systems",
    "ESP32",
    "Machine Learning",
    "Ahmed Shahariar Udoy",
  ],
  authors: [{ name: "Ahmed Shahariar Udoy" }],
  openGraph: {
    title: "Ahmed Shahariar Udoy | IoT & Robotics Engineer",
    description:
      "IoT and Robotics Engineering student building intelligent monitoring systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
