import type { Metadata } from "next";
import "./globals.css";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Inter:wght@300;400;500;600&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
