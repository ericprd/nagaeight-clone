/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
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

    if (screenWidth >= 850) setIsActive(false);

    return window.addEventListener("resize", handleWindowResize);
  }, [screenWidth, setIsActive]);

  const width = screenWidth < 850;

  return (
    <div
      className={
        width
          ? isActive
            ? centerMenuMobileStyle + "visible opacity-100 z-[1000]"
            : centerMenuMobileStyle + "opacity-0 invisible"
          : ""
      }>
      <ul
        className={
          isActive
            ? "absolute right-0 left-0 bottom-0 top-[40%] w-auto -translate-y-1/2"
            : centerMenuDesktopStyle
        }>
        <li className='group relative'>
          <a href='#' className={width ? isActive && centerMenuStyle : ""}>
            About
          </a>
          <div
            className={
              screenWidth >= 850 &&
              "absolute group-hover:border-b-2 scale-0 group-hover:scale-100 border-[#A72B2A] transition-all duration-300 left-0 bottom-0 w-full"
            }></div>
        </li>
        <li className='group relative'>
          <a href='#' className={width ? isActive && centerMenuStyle : ""}>
            Menu
          </a>
          <div
            className={
              screenWidth >= 850 &&
              "absolute group-hover:border-b-2 scale-0 group-hover:scale-100 border-[#A72B2A] transition-all duration-300 left-0 bottom-0 w-full"
            }></div>
        </li>
        <li className='group relative'>
          <a href='#' className={width ? isActive && centerMenuStyle : ""}>
            Reservation
          </a>
          <div
            className={
              screenWidth >= 850 &&
              "absolute group-hover:border-b-2 scale-0 group-hover:scale-100 border-[#A72B2A] transition-all duration-300 left-0 bottom-0 w-full"
            }></div>
        </li>
        <li className='group relative'>
          <a href='#' className={width ? isActive && centerMenuStyle : ""}>
            Contact
          </a>
          <div
            className={
              screenWidth >= 850 &&
              "absolute group-hover:border-b-2 scale-0 group-hover:scale-100 border-[#A72B2A] transition-all duration-300 left-0 bottom-0 w-full"
            }></div>
        </li>
      </ul>
    </div>
  );
}
