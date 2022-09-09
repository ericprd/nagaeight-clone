import { Facebook, Instagram } from "@mui/icons-material";
import { useContext } from "react";
import { GlobalContext } from "../context/global-context";

export default function LeftMenu() {
  const { isActive } = useContext(GlobalContext);

  const desktopStyle = "hidden md:flex gap-2 items-center";
  const mobileStyle =
    "absolute flex justify-center items-center -bottom-[500px] left-0 right-0 gap-3 text-white";

  return (
    <ul className={isActive ? mobileStyle : desktopStyle}>
      <li className='h-[30px] w-[30px] shadow-xl rounded-full border flex justify-center'>
        <a href='https://instagram.com/'>
          <Instagram style={{ fontSize: "1rem" }} />
        </a>
      </li>
      <li className='h-[30px] w-[30px] shadow-xl rounded-full border flex justify-center'>
        <a href='https://facebook.com/'>
          <Facebook style={{ fontSize: "1rem" }} />
        </a>
      </li>
      <li className={isActive && "absolute -top-10"}>Follow Us!</li>
    </ul>
  );
}
