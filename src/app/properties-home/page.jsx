import HomePageProperties from '@/components/course/home-page/home-properties'
import HeroHomePage from "@/components/homePage/hero-home-page";
import InfoBoxe from "@/components/info-boxes/info-boxes";
export default async function Home() {
  return (
    <>
      <HeroHomePage />
      <InfoBoxe />
      <HomePageProperties />
    </>
  )
}