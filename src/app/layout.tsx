import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Afroku - Plateforme Culturelle & Tourisme au Bénin",
  description: "Découvrez, réservez et payez en ligne par Mobile Money vos expériences touristiques, guides certifiés, artisanat Made in Benin et billets d'événements (Vodun Days, WeLoveEya).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
