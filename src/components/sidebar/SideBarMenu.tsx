import { useState } from 'react';
import { motion } from 'framer-motion';
import { IoIosArrowDown } from 'react-icons/io';
import { NavLink, useLocation } from 'react-router-dom';

const SideBarMenu = ({ data }: any) => {
  const { pathname } = useLocation();
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <>
      <li
        className={`link flex items-center ${
          pathname.includes(data.name) && 'text-blue-600'
        }`}
        onClick={() => setSubMenuOpen(!subMenuOpen)}
      >
        <data.icon size={23} className="min-w-max" />
        <p className="flex-1 ml-2 capitalize">{data.name}</p>
        <IoIosArrowDown
          className={` ${subMenuOpen && 'rotate-180'} duration-200 `}
        />
      </li>
      <motion.ul
        animate={
          subMenuOpen
            ? {
                height: 'fit-content',
              }
            : {
                height: 0,
              }
        }
        className="flex h-0 flex-col pl-10 bg-white rounded-sm text-[0.8rem] font-normal overflow-hidden"
      >
        {data.menus?.map((menu: string) => (
          <li key={menu} className="flex items-center ">
            <NavLink
              to={`/${data.name}/${menu}`}
              className="link !bg-transparent capitalize my-1 py-2 px-1 rounded-sm w-full text-black hover:bg-black duration-300 hover:text-white "
            >
              {menu}
            </NavLink>
          </li>
        ))}
      </motion.ul>
    </>
  );
};

export default SideBarMenu;
