import DesktopNav from "@/components/ui/navbar/desktop/desktop-nav.jsx";
import TabletNav from "@/components/ui/navbar/tablet/tablet-nav";
import MobileNav from "@/components/ui/navbar/mobile/mobile-nav";

export default function Navigation(props) {
  return (<>
    <DesktopNav  />
    <TabletNav className="" />
    <MobileNav className="d-block d-sm-none" />

  </>)
}