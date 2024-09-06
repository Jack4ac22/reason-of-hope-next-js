import { Markazi_Text, Roboto } from "next/font/google";
import "@/assets/styles/globals.css";
import NavBar from "@/components/blog-components/ui/navigation/navbar";
import LayOverSection from "@/components/blog-components/ui/layover/layover";
import { LayoverGlobalProvider } from "@/context/layover/LayoverGlobalContext";
import DarkModeSwitch from "@/components/blog-components/ui/dark-mode/dark-mode-switch";
import homepageMetadata from "@/assets/blog/metadata/homepage";
import MainFooter from "@/components/blog-components/ui/footer/main-footer";

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

export const metadata = homepageMetadata;

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={` scroll-smooth ${markazi_text.className} bg-darkAccent-700 `}>
      <body className="page-width uni-background transition-all duration-200 mx-auto">
        <LayoverGlobalProvider>
          <DarkModeSwitch >
            <NavBar />
            <LayOverSection />
            <div className="uni-background min-h-screen">
              {children}
            </div>
            <MainFooter />
          </DarkModeSwitch>
        </LayoverGlobalProvider>
      </body>
    </html>
  );
}
