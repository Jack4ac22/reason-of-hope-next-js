import UiLogo from "./logo";
import UiMainNav from "./main-nav";

export default function UiHeader() {
  return (
    <>
      <header className="container row"> 
          <UiLogo />
          <UiMainNav />
      </header>
    </>
  );
}
