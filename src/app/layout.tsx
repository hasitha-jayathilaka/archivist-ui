import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Archivist | Into the Artverse",
  description:
    "A culture-tech VR experience reconstructing history-accurate worlds through art and archives.",
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
