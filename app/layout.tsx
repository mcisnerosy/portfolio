import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marcos Cisneros — Football Operations & Engineering",
  description:
    "Junior Computer Engineering student at Notre Dame and Football Recruiting Intern. Building at the intersection of football intelligence and technology.",
  openGraph: {
    title: "Marcos Cisneros",
    description: "Football Operations meets Engineering",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
