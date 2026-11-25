import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Miguel Ayala | Portafolio",
  description:
    "Portafolio de Miguel Angel Ayala Fuentes: proyectos de inteligencia artificial, desarrollo web y aplicaciones.",
  applicationName: "Portafolio de Miguel Ayala",
  openGraph: {
    title: "Miguel Ayala | Portafolio",
    description:
      "Proyectos de inteligencia artificial, desarrollo web y soluciones prácticas con código.",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
