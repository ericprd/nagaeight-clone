import { useContext } from "react";
import { GlobalContext } from "../../context/global-context";
import { buttonStyle, hamburgerButton } from "../../styles/navbar-style";

export default function HamburgerIcon() {
  const { isActive, setIsActive } = useContext(GlobalContext);

  const handleClick = () => {
    if (isActive) {
      setTimeout(() => {
        setIsActive(!isActive);
      }, 900);
    } else {
      setIsActive(!isActive);
    }
  };

  return (
    <div
      className={hamburgerButton}
      onClick={handleClick}>
      <div className='flex flex-col gap-[5px]'>
        <div
          className={
            isActive
              ? buttonStyle + " translate-x-[4px] translate-y-[7px] rotate-45"
              : buttonStyle
          }></div>
        <div className={isActive ? " opacity-0 scale-0" : buttonStyle}></div>
        <div
          className={
            isActive
              ? buttonStyle + " translate-x-[4px] -translate-y-[5px] -rotate-45"
              : buttonStyle
          }></div>
      </div>
      <p>{isActive ? "Close" : "Menu"}</p>
    </div>
  );
}
