import { Navbar } from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { Footer } from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TSOFT | Planes de Carrera",
  description:
    "Web App creada para observar los distintos planes de carreras y ramas dentro del mismo.",
  author: "Jose Luis Koller",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="flex min-h-screen flex-col items-center justify-center">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
