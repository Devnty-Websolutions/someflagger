import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "SoMeFlagger.com",
  description: "Seen Harmful Content Online? Report It Here, and We’ll Take Action!",
  metadataBase: new URL("https://someflagger.on.devnty.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: "/open-graph-image.png",
  },
  themeColor: "#330594",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Apple-specific meta tags */}
        <link rel="apple-touch-icon" href="/someflagger-logo.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="SoMeFlagger" />
      </Head>

      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
