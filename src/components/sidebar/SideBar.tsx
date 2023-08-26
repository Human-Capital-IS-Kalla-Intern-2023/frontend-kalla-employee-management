import { useEffect, useState, useRef } from 'react';
import SideBarMenu from './SideBarMenu';
import { motion } from 'framer-motion';
import logoKalla from '../../assets/img/kalla-logo-full.webp';
import { IoIosArrowBack } from 'react-icons/io';
import { SlSettings } from 'react-icons/sl';
import { AiOutlineAppstore } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { HiOutlineDatabase } from 'react-icons/hi';
import { TbReportAnalytics } from 'react-icons/tb';
import { RiBuilding3Line } from 'react-icons/ri';
import { useMediaQuery } from 'react-responsive';
import { MdMenu } from 'react-icons/md';
import { NavLink, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const isTabletMid = useMediaQuery({ query: '(max-width: 768px)' });
  const [open, setOpen] = useState(isTabletMid ? false : true);
  const { pathname } = useLocation();
  const sidebarRef = useRef<HTMLDivElement>(null);

  const textAnimation = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };

  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTabletMid]);

  useEffect(() => {
    isTabletMid && setOpen(false);
  }, [pathname]);

  const Nav_animation = isTabletMid
    ? {
        open: {
          x: 0,
          width: '16rem',
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: '16rem',
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: '3.2rem',
          transition: {
            damping: 40,
          },
        },
      };

  const subMenusList = [
    {
      name: 'company',
      icon: RiBuilding3Line,
      menus: ['bisnis unit', 'departement', 'division'],
    },
    {
      name: 'setting',
      icon: TbReportAnalytics,
      menus: ['profile', 'account'],
    },
  ];

  return (
    <div className="shadow-xl">
      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${
          open ? 'block' : 'hidden'
        } `}
      ></div>
      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? 'open' : 'closed'}
        className=" bg-white text-gray shadow-xl z-[999] max-w-[16rem]  w-[16rem] 
            overflow-hidden md:relative fixed
         h-screen "
      >
        <div className="flex items-center gap-2.5 font-medium border-b py-3 border-slate-300  mx-3">
          <img
            src={logoKalla}
            width={45}
            height={45}
            alt="Kalla Logo"
            className="w-fit"
          />
        </div>

        <div className="flex flex-col h-full">
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex  flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100   md:h-[68%] h-[70%]">
            <div className="rounded-md ">
              <li className="px-1 py-2 mb-1 rounded-md hover:bg-primary hover:text-white">
                <NavLink to={'/dashboard'}>
                  <div className="flex items-center">
                    <AiOutlineAppstore size={23} className="min-w-max" />
                    <motion.div
                      variants={textAnimation}
                      animate={open ? 'open' : 'closed'}
                      className="ml-2 link"
                    >
                      Dashboard
                    </motion.div>
                  </div>
                </NavLink>
              </li>
              <li className="px-1 py-2 mb-1 rounded-md hover:bg-primary hover:text-white">
                <NavLink to={'/employee'} className="link">
                  <div className="flex items-center">
                    <BsPerson size={23} className="min-w-max" />
                    <motion.div
                      variants={textAnimation}
                      animate={open ? 'open' : 'closed'}
                      className="ml-2 link"
                    >
                      Employee
                    </motion.div>
                  </div>
                </NavLink>
              </li>
              <li className="px-1 py-2 mb-1 rounded-md hover:bg-primary hover:text-white">
                <NavLink to={'/reports'} className="link">
                  <div className="flex items-center">
                    <HiOutlineDatabase size={23} className="min-w-max" />

                    <motion.div
                      variants={textAnimation}
                      animate={open ? 'open' : 'closed'}
                      className="ml-2 link"
                    >
                      Reports
                    </motion.div>
                  </div>
                </NavLink>
              </li>
            </div>

            {(open || isTabletMid) && (
              <div className="py-5 border-y border-slate-300 ">
                <p className="inline-block pl-3 mb-2 text-base text-slate-500">
                  Other Section
                </p>
                {subMenusList?.map((menu) => (
                  <div
                    key={menu.name}
                    className="flex flex-col gap-1 px-1 py-2 mb-1 rounded-md hover:bg-primary hover:text-white"
                  >
                    <SideBarMenu data={menu} />
                  </div>
                ))}
              </div>
            )}
            <li className="px-1 py-2 mt-3 mb-1 rounded-md hover:bg-primary hover:text-white">
              <NavLink to={'/logout'} className=" link">
                <div className="flex items-center">
                  <SlSettings size={23} className="min-w-max" />
                  <motion.div
                    variants={textAnimation}
                    animate={open ? 'open' : 'closed'}
                    className="ml-2 link"
                  >
                    Logout
                  </motion.div>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
        <motion.div
          onClick={() => {
            setOpen(!open);
          }}
          animate={
            open
              ? {
                  x: 0,
                  y: 0,
                  rotate: 0,
                }
              : {
                  x: -10,
                  y: -200,
                  rotate: 180,
                }
          }
          transition={{ duration: 0 }}
          className="absolute z-50 hidden cursor-pointer w-fit h-fit md:block right-2 bottom-3"
        >
          <IoIosArrowBack size={25} />
        </motion.div>
      </motion.div>
      <div className="m-3 md:hidden " onClick={() => setOpen(true)}>
        <MdMenu size={25} />
      </div>
    </div>
  );
};

export default Sidebar;
