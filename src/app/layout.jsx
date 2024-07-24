import {Markazi_Text, Roboto } from "next/font/google";
import "@/assets/styles/globals.css";
import NavBar from "@/components/blog-components/ui/navigation/navbar";
import LayOverSection from "@/components/blog-components/ui/layover/layover";
import { LayoverGlobalProvider } from "@/context/layover/LayoverGlobalContext";
// import DarkModeSwitch from "@/components/blog-components/ui/dark-mode/dark-mode-switch";

const markazi_text = Markazi_Text(
  {
    weight: ['400', '500', '600', '700'],
    subsets: ['arabic'],
    display: 'swap',
  }
);

const roboto = Roboto(
  {
    weight: ['100', '300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
  }
);

export const metadata = {
  title: "Reson Of Hope |  سبب الرجاء",
  description: "Reson of Hope is a Reformed Christian blog ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={`"scroll-smooth" ${markazi_text.className}`}>
      <body className="transition-all duration-200">
        <LayoverGlobalProvider>
          {/* <DarkModeSwitch > */}
          <NavBar />
          <LayOverSection />
          {children}
          {/* </DarkModeSwitch> */}
        </LayoverGlobalProvider>
      </body>
    </html>
  );
}
