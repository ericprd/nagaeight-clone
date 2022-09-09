import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/global-context";

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
    window.addEventListener("resize", handleWindowResize);
    if (screenWidth >= 768) setIsActive(false);
    return window.addEventListener("resize", handleWindowResize);
  }, [screenWidth]);

  const desktopStyle =
    "gap-5 font-semibold items-center -translate-x-10 hidden md:flex text-[#A72B2A] transition-['opacity, visibility'] duration-300 ease-in-out ";

  const mobileStyle =
    "flex flex-col gap-6 justify-start pt-24 items-center absolute normal-case text-white text-xl top-[54px] left-0 right-0 bottom-0 h-[calc(100vh-54px)] -z-10 bg-black/90 md:hidden transition-['opacity, visibility'] duration-300 ease-in-out normal-case ";

  return (
    <ul
      className={
        screenWidth < 768
          ? isActive
            ? mobileStyle + "visible opacity-100"
            : mobileStyle + "opacity-0 invisible"
          : desktopStyle
      }>
      <li>
        <a href='#'>About</a>
      </li>
      <li>
        <a href='#'>Menu</a>
      </li>
      <li>
        <a href='#'>Reservation</a>
      </li>
      <li>
        <a href='#'>Contact</a>
      </li>
    </ul>
  );
}
