import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexSerif = IBM_Plex_Serif({
  variable: "--font-plex-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dbatopgun.com"),
  title: {
    default: "DBA TopGun | IBM Gold Consultant for Data & AI",
    template: "%s | DBA TopGun",
  },
  description:
    "IBM Gold Consultant and Business Partner specializing in enterprise Db2 modernization, zero-downtime migrations, high availability, and AI governance with watsonx.",
  openGraph: {
    title: "DBA TopGun | IBM Gold Consultant for Data & AI",
    description:
      "Enterprise Db2 consulting, zero-downtime migrations, and governed AI for Fortune 100 and federal systems of record.",
    url: "https://dbatopgun.com",
    siteName: "DBA TopGun",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DBA TopGun | IBM Gold Consultant for Data & AI",
    description:
      "Enterprise Db2 consulting, zero-downtime migrations, and governed AI for systems of record.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plexSans.variable} ${plexSerif.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col site-shell">{children}</body>
    </html>
  );
}
