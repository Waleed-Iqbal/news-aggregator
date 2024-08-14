import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "News aggregator",
  description: "Frontend development project for a news aggregator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" href="./logo-qt.png" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
