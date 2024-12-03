import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "SoMeFlagger.com",
  description: "Social Media Harm Report",
  metadataBase: new URL("https://someflagger.on.devnty.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: "/Someflagger-Twitter-post.png",
  },
  themeColor: '#330594',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
