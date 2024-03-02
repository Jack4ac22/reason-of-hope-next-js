import LogoIcon from "@/components/ui/navbar/nav-elements/logo-icon"
import MenuMainList from "@/components/ui/navbar/nav-elements/main-list/menu-main-list"
export default function DesktopNav(props) {
  return (
    <>

      <nav className="navbar  d-none d-lg-block">
        <div className="container-fluid navbar-expand-lg bg-body-tertiary">
          <LogoIcon />
          <MenuMainList />
        </div>
      </nav>

    </>
  )
}
