import {
  cover,
  menu1,
  menu10,
  menu11,
  menu12,
  menu13,
  menu14,
  menu15,
  menu2,
  menu3,
  menu4,
  menu5,
  menu6,
  menu7,
  menu8,
  menu9,
} from "../components/menu-components/image-url";
import MenuImage from "../components/menu-components/menu-image";

export default function MenuPage() {
  return (
    <div className='w-full bg-slate-50'>
      <MenuImage src={cover} alt='cover' />
      <MenuImage src={menu1} alt='menu1' />
      <MenuImage src={menu2} alt='menu2' />
      <MenuImage src={menu3} alt='menu3' />
      <MenuImage src={menu4} alt='menu4' />
      <MenuImage src={menu5} alt='menu5' />
      <MenuImage src={menu6} alt='menu6' />
      <MenuImage src={menu7} alt='menu7' />
      <MenuImage src={menu8} alt='menu8' />
      <MenuImage src={menu9} alt='menu9' />
      <MenuImage src={menu10} alt='menu10' />
      <MenuImage src={menu11} alt='menu11' />
      <MenuImage src={menu12} alt='menu12' />
      <MenuImage src={menu13} alt='menu13' />
      <MenuImage src={menu14} alt='menu14' />
      <MenuImage src={menu15} alt='menu15' />
    </div>
  );
}
