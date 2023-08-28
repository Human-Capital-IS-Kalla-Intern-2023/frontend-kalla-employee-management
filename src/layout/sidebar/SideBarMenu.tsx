import { useState } from 'react';
import { motion } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom';

const SideBarMenu = ({ data }: any) => {
  const { pathname } = useLocation();
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <>
      <li
        className={`link flex items-center ${pathname.includes(data.name)}`}
        onClick={() => setSubMenuOpen(!subMenuOpen)}
      >
        {data.icon}
        <p className="flex-1 ml-2 capitalize">{data.name}</p>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512"
          className={` ${subMenuOpen && 'rotate-180'} duration-200  `}
        >
          <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
        </svg>
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
        {data.menus?.map((menu: any) => (
          <li key={menu} className="flex items-center ">
            <NavLink
              to={`/${data.name}/${menu}`}
              className="w-full px-1 py-2 my-1 text-black capitalize duration-300 rounded-sm link hover:bg-black hover:text-white "
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
