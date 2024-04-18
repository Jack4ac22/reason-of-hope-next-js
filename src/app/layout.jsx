import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";
import NavBar from '@/components/ui/nav-bar/nav-bar'
import Footer from '@/components/ui/footer/footer'
import AuthProviderComponent from '@/components/course/auth-provider'
import { MessagesGlobalProvider } from "@/context/messages-context/MessagesGlobalContext";

// toasters
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    <MessagesGlobalProvider>
      <AuthProviderComponent>
        <html lang="en">
          <body className={inter.className}>
            <NavBar />
            {children}
            <Footer />
            <ToastContainer />
          </body>
        </html>
      </AuthProviderComponent>
    </MessagesGlobalProvider>
  );
}
