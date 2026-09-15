import { Archivo, Archivo_Black } from "next/font/google";
import "./globals.css";

const text = Archivo({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-text",
  display: "swap",
});

const display = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Phoky",
    template: "%s — Phoky",
  },
  description: "L'atelier derrière Mai Coach, Collectra et Lisko.",
  icons: {
    icon: "/icons/phoky.png",
    apple: "/icons/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${text.variable} ${display.variable}`}>
      <body>{children}</body>
    </html>
  );
}
