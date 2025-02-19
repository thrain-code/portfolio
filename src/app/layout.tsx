import Navbar from "@/components/navbar";
import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${montserrat.variable}`}>
        <div>
          <Navbar />
        </div>
        <main className="pt-16 lg:pt-16"> {/* Tambahkan padding-top dan overflow */}
          {children}
        </main>
      </body>
    </html>
  );
}