// Library & Package Import
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { NavLink, useLocation } from 'react-router-dom';

// Components Import
import SideBarMenu from './SideBarMenu';
import ButtonLogout from '../../components/buttons/LogoutButton';

// Assets Import
import logoKalla from '../../assets/img/kalla-logo-full.webp';
import {
  SettingIcon,
  CompanyIcon,
  PositionIcon,
} from '../../assets/icons/icon';
import {
  DashboardIcon,
  UserIcon,
  ReportIcon,
  CloseSidebarIcon,
  ReponsiveSidebarIcon,
} from '../../assets/icons/icon';

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
    if (isTabletMid) {
      setOpen(false);
    }
  }, [pathname, isTabletMid]);

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
      icon: <CompanyIcon className="min-w-max" />,
      menus: ['bisnis', 'directorate', 'division', 'seksi', 'location'],
    },
    {
      name: 'position',
      icon: <PositionIcon className="min-w-max w-6 h-6" />,
      menus: ['posisi', 'grade'],
    },
    {
      name: 'setting',
      icon: <SettingIcon className="min-w-max" />,
      menus: ['profile', 'account'],
    },
  ];

  return (
    <>
      <div className="">
        <div
          onClick={() => setOpen(false)}
          className={`md:hidden fixed inset-0 max-h-full z-10 bg-black/50 ${
            open ? 'block' : 'hidden'
          } `}
        ></div>
        <motion.div
          ref={sidebarRef}
          variants={Nav_animation}
          initial={{ x: isTabletMid ? -250 : 0 }}
          animate={open ? 'open' : 'closed'}
          className=" bg-white text-gray  z-10 max-w-[16rem]  w-[16rem] 
            overflow-hidden md:relative fixed
         h-full  min-h-screen"
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
            <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex  flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100   md:h-[68%] h-[70%] rounded-md">
              <li className="px-1 py-2 mb-1 rounded-md hover:bg-primary hover:text-white">
                <NavLink to={'/dashboard'}>
                  <div className="flex items-center">
                    <DashboardIcon className="min-w-max" />
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
                    <UserIcon className="min-w-max" />

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
                    <ReportIcon className="min-w-max" />
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

              {(open || isTabletMid) && (
                <div className="py-5 border-y border-slate-300 ">
                  <p className="inline-block pl-3 mb-2 text-base text-slate-500">
                    Other Section
                  </p>
                  {subMenusList?.map((menu: any) => (
                    <div
                      key={menu.name}
                      className="flex flex-col gap-1 px-1 py-2 mb-1 rounded-md hover:bg-primary hover:text-white"
                    >
                      <SideBarMenu data={menu} />
                    </div>
                  ))}
                </div>
              )}
              <ButtonLogout />
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
            <CloseSidebarIcon />
          </motion.div>
        </motion.div>
        <div className="m-3 md:hidden " onClick={() => setOpen(true)}>
          <ReponsiveSidebarIcon />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
