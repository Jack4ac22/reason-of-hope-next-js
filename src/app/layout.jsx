import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";
import NavBar from '@/components/ui/nav-bar/nav-bar'
import Footer from '@/components/ui/footer/footer'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Reason Of Hope | Work With Us",
  description:
    "Reason Of Hope | Work With Us: a platform that produce and distribute resources that facilitate the accesibility of the Gospel to the world.",
  keywords:
    "Reason Of Hope, Work With Us, Gospel, Jesus, resources, accesibility, world",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
