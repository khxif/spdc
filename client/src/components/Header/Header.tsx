import Logo from "./Logo";
import MobileSideBar from "./MobileSideBar";
import NavLinks from "./NavLinks";

export default function Header() {
  return (
    <header className="px-5 md:px-10 py-4 flex items-center justify-between">
      <Logo />
      <NavLinks />
      <div className="md:hidden">
        <MobileSideBar />
      </div>
    </header>
  );
}
