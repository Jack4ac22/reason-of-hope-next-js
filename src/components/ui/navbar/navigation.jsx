import DesktopNav from "@/components/ui/navbar/desktop/desktop-nav.jsx";
import TabletNav from "@/components/ui/navbar/tablet/tablet-nav";
import MobileNav from "@/components/ui/navbar/mobile/mobile-nav";
import BootstrapNavigator from "@/components/ui/navbar/bootstrap-navigator";
export default function Navigation(props) {
  return (<>
    {/* <DesktopNav />
    <TabletNav />
    <MobileNav /> */}
    <BootstrapNavigator />
  </>)
}