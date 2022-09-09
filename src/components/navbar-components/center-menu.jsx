/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/global-context";
import {
  centerMenuDesktopStyle,
  centerMenuMobileStyle,
  centerMenuStyle,
} from "../../styles/navbar-style";

export default function CenterMenu() {
  const { isActive, setIsActive } = useContext(GlobalContext);

  const getWidthWindow = () => {
    const { innerWidth } = window;

    return innerWidth;
  };

  const [screenWidth, setScreenWidth] = useState(getWidthWindow());

  useEffect(() => {
    function handleWindowResize() {
      setScreenWidth(getWidthWindow());
    }

    // get width window

    window.addEventListener("resize", handleWindowResize);

    if (screenWidth >= 768) setIsActive(false);

    return window.addEventListener("resize", handleWindowResize);
  }, [screenWidth, setIsActive]);

  const width = screenWidth < 768;

  return (
    <div
      className={
        width
          ? isActive
            ? centerMenuMobileStyle + "visible opacity-100 z-10"
            : centerMenuMobileStyle + "opacity-0 invisible"
          : ""
      }>
      <ul
        className={
          isActive
            ? "absolute right-0 left-0 bottom-0 top-[40%] w-auto -translate-y-1/2"
            : centerMenuDesktopStyle
        }>
        <li>
          <a href='#' className={width ? isActive && centerMenuStyle : ""}>
            About
          </a>
        </li>
        <li>
          <a href='#' className={width ? isActive && centerMenuStyle : ""}>
            Menu
          </a>
        </li>
        <li>
          <a href='#' className={width ? isActive && centerMenuStyle : ""}>
            Reservation
          </a>
        </li>
        <li>
          <a href='#' className={width ? isActive && centerMenuStyle : ""}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
