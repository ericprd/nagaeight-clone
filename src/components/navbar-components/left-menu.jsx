import { Facebook, Instagram } from "@mui/icons-material";
import { useContext } from "react";
import { GlobalContext } from "../../context/global-context";
import {
  leftMenuDesktopStyle,
  leftMenuMobileStyle,
  menuStyle,
} from "../../styles/navbar-style";

export default function LeftMenu() {
  const { isActive } = useContext(GlobalContext);

  return (
    <ul className={isActive ? leftMenuMobileStyle : leftMenuDesktopStyle}>
      <li className={menuStyle}>
        <a href='https://instagram.com/'>
          <Instagram style={{ fontSize: "1rem" }} />
        </a>
      </li>
      <li className={menuStyle}>
        <a href='https://facebook.com/'>
          <Facebook style={{ fontSize: "1rem" }} />
        </a>
      </li>
      <li className={isActive && "absolute -top-10"}>Follow Us!</li>
    </ul>
  );
}
