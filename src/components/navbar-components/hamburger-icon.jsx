import { useContext } from "react";
import { GlobalContext } from "../../context/global-context";

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

  const buttonStyle =
    "w-[20px] bg-black h-[2px] transition-all duration-300 rounded-xl";

  return (
    <div
      className='flex justify-center items-center gap-3 cursor-pointer md:hidden z-50'
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
