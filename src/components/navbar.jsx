import LeftMenu from "./left-menu";
import CenterMenu from "./navbar-components/center-menu";
import HamburgerIcon from "./navbar-components/hamburger-icon";
import Logo from "./navbar-components/logo";

export default function Navbar() {
  return (
    <nav className='flex justify-between items-center h-[54px] lg:h-[75px] w-full px-[20px] uppercase fixed z-30'>
      <HamburgerIcon />
      <LeftMenu />
      <CenterMenu />
      <Logo />
    </nav>
  );
}
