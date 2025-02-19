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
    <html lang="en">
      <body className={montserrat.variable}>
        <div>
          <Navbar />
        </div>
        <main className="lg:pt-16 pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}