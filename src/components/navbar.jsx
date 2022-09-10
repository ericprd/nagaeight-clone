import LeftMenu from "./navbar-components/left-menu";
import CenterMenu from "./navbar-components/center-menu";
import HamburgerIcon from "./navbar-components/hamburger-icon";
import Logo from "./navbar-components/logo";
import { headerStyle, navbarStyle } from "../styles/navbar-style";

export default function Navbar() {
  return (
    <header className={headerStyle}>
      <nav className={navbarStyle}>
        <HamburgerIcon />
        <LeftMenu />
        <CenterMenu />
        <Logo />
      </nav>
    </header>
  );
}
