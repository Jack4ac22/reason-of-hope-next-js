import Link from "next/link";
import HeroHomePage from "@/components/homePage/hero-home-page";
import InfoBoxe from "@/components/info-boxes/info-boxes";

export const metadata = {
  title: "Work With Us | Home Page",
  description:
    "Reason Of Hope Work With Us: a platform that produce and distribute resources that facilitate the accesibility of the Gospel to the world.",
  keywords:
    "Reason Of Hope, Work With Us, Gospel, Jesus, resources, accesibility, world",
};
export default function Home() {

  return (

    <>
      <HeroHomePage />
      <InfoBoxe />
    </>
  );
}
