import LeftMenu from "./navbar-components/left-menu";
import CenterMenu from "./navbar-components/center-menu";
import HamburgerIcon from "./navbar-components/hamburger-icon";
import Logo from "./navbar-components/logo";
import { navbarStyle } from "../styles/navbar-style";

export default function Navbar() {
  return (
    <header className='h-[54px] fixed top-0 left-0 right-0 bg-white z-10'>
      <nav className={navbarStyle}>
        <HamburgerIcon />
        <LeftMenu />
        <CenterMenu />
        <Logo />
      </nav>
    </header>
  );
}
