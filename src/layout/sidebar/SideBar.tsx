import { useEffect, useState, useRef } from 'react';
import SideBarMenu from './SideBarMenu';
import { motion } from 'framer-motion';
import logoKalla from '../../assets/img/kalla-logo-full.webp';
import { useMediaQuery } from 'react-responsive';
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

  const companyIcon = (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="23"
      width="23"
      className="min-w-max"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M21 19h2v2H1v-2h2V4a1 1 0 011-1h10a1 1 0 011 1v15h4v-8h-2V9h3a1 1 0 011 1v9zM5 5v14h8V5H5zm2 6h4v2H7v-2zm0-4h4v2H7V7z" />
    </svg>
  );

  const settingIcon = (
    <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="23"
      width="23"
      className="min-w-max"
    >
      <path d="M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 009.3-35.2l-.9-2.6a443.74 443.74 0 00-79.7-137.9l-1.8-2.1a32.12 32.12 0 00-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 00-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 00-25.8 25.7l-15.8 85.4a351.86 351.86 0 00-99 57.4l-81.9-29.1a32 32 0 00-35.1 9.5l-1.8 2.1a446.02 446.02 0 00-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 00-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0035.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0025.8 25.7l2.7.5a449.4 449.4 0 00159 0l2.7-.5a32.05 32.05 0 0025.8-25.7l15.7-85a350 350 0 0099.7-57.6l81.3 28.9a32 32 0 0035.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 01-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97a377.5 377.5 0 01-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 01512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 01400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 01624 502c0 29.9-11.7 58-32.8 79.2z" />
    </svg>
  );
  const subMenusList = [
    {
      name: 'company',
      icon: companyIcon,
      menus: ['bisnis unit', 'departement', 'division'],
    },
    {
      name: 'setting',
      icon: settingIcon,
      menus: ['profile', 'account'],
    },
  ];

  return (
    <div className="">
      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 max-h-full  z-[998] bg-black/50 ${
          open ? 'block' : 'hidden'
        } `}
      ></div>
      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? 'open' : 'closed'}
        className=" bg-white text-gray  z-[999] max-w-[16rem]  w-[16rem] 
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
                  <svg
                    fill="none"
                    viewBox="0 0 15 15"
                    height="23"
                    width="23"
                    className="min-w-max"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M2.8 1h-.05c-.229 0-.426 0-.6.041A1.5 1.5 0 001.04 2.15C1 2.324 1 2.52 1 2.75V5.25c0 .229 0 .426.041.6A1.5 1.5 0 002.15 6.96C2.324 7 2.52 7 2.75 7H5.25c.229 0 .426 0 .6-.041A1.5 1.5 0 006.96 5.85C7 5.676 7 5.48 7 5.25V2.75c0-.229 0-.426-.041-.6A1.5 1.5 0 005.85 1.04C5.676 1 5.48 1 5.25 1H2.8zm-.417 1.014c.043-.01.11-.014.417-.014h2.4c.308 0 .374.003.417.014a.5.5 0 01.37.37c.01.042.013.108.013.416v2.4c0 .308-.003.374-.014.417a.5.5 0 01-.37.37C5.575 5.996 5.509 6 5.2 6H2.8c-.308 0-.374-.003-.417-.014a.5.5 0 01-.37-.37C2.004 5.575 2 5.509 2 5.2V2.8c0-.308.003-.374.014-.417a.5.5 0 01.37-.37zM9.8 1h-.05c-.229 0-.426 0-.6.041A1.5 1.5 0 008.04 2.15C8 2.324 8 2.52 8 2.75V5.25c0 .229 0 .426.041.6A1.5 1.5 0 009.15 6.96C9.324 7 9.52 7 9.75 7H12.25c.229 0 .426 0 .6-.041A1.5 1.5 0 0013.96 5.85C14 5.676 14 5.48 14 5.25V2.75c0-.229 0-.426-.041-.6A1.5 1.5 0 0012.85 1.04C12.676 1 12.48 1 12.25 1H9.8zm-.417 1.014c.043-.01.11-.014.417-.014h2.4c.308 0 .374.003.417.014a.5.5 0 01.37.37c.01.042.013.108.013.416v2.4c0 .308-.004.374-.014.417a.5.5 0 01-.37.37c-.042.01-.108.013-.416.013H9.8c-.308 0-.374-.003-.417-.014a.5.5 0 01-.37-.37C9.004 5.575 9 5.509 9 5.2V2.8c0-.308.003-.374.014-.417a.5.5 0 01.37-.37zM2.75 8H5.25c.229 0 .426 0 .6.041A1.5 1.5 0 016.96 9.15C7 9.324 7 9.52 7 9.75V12.25c0 .229 0 .426-.041.6A1.5 1.5 0 015.85 13.96C5.676 14 5.48 14 5.25 14H2.75c-.229 0-.426 0-.6-.041A1.5 1.5 0 011.04 12.85C1 12.676 1 12.48 1 12.25V9.75c0-.229 0-.426.041-.6A1.5 1.5 0 012.15 8.04C2.324 8 2.52 8 2.75 8zm.05 1c-.308 0-.374.003-.417.014a.5.5 0 00-.37.37C2.004 9.425 2 9.491 2 9.8v2.4c0 .308.003.374.014.417a.5.5 0 00.37.37c.042.01.108.013.416.013h2.4c.308 0 .374-.004.417-.014a.5.5 0 00.37-.37c.01-.042.013-.108.013-.416V9.8c0-.308-.003-.374-.014-.417a.5.5 0 00-.37-.37C5.575 9.004 5.509 9 5.2 9H2.8zm7-1h-.05c-.229 0-.426 0-.6.041A1.5 1.5 0 008.04 9.15C8 9.324 8 9.52 8 9.75V12.25c0 .229 0 .426.041.6A1.5 1.5 0 009.15 13.96c.174.041.371.041.6.041H12.25c.229 0 .426 0 .6-.041a1.5 1.5 0 001.109-1.109c.041-.174.041-.371.041-.6V9.75c0-.229 0-.426-.041-.6A1.5 1.5 0 0012.85 8.04C12.676 8 12.48 8 12.25 8H9.8zm-.417 1.014c.043-.01.11-.014.417-.014h2.4c.308 0 .374.003.417.014a.5.5 0 01.37.37c.01.042.013.108.013.416v2.4c0 .308-.004.374-.014.417a.5.5 0 01-.37.37c-.042.01-.108.013-.416.013H9.8c-.308 0-.374-.004-.417-.014a.5.5 0 01-.37-.37C9.004 12.575 9 12.509 9 12.2V9.8c0-.308.003-.374.014-.417a.5.5 0 01.37-.37z"
                      clipRule="evenodd"
                    />
                  </svg>
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
                  <svg
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    height="23"
                    width="23"
                    className="min-w-max"
                  >
                    <path d="M8 8a3 3 0 100-6 3 3 0 000 6zm2-3a2 2 0 11-4 0 2 2 0 014 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                  </svg>
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
                  <svg
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    height="23"
                    width="23"
                    className="min-w-max"
                  >
                    <path d="M9.5 0a.5.5 0 01.5.5.5.5 0 00.5.5.5.5 0 01.5.5V2a.5.5 0 01-.5.5h-5A.5.5 0 015 2v-.5a.5.5 0 01.5-.5.5.5 0 00.5-.5.5.5 0 01.5-.5h3z" />
                    <path d="M3 2.5a.5.5 0 01.5-.5H4a.5.5 0 000-1h-.5A1.5 1.5 0 002 2.5v12A1.5 1.5 0 003.5 16h9a1.5 1.5 0 001.5-1.5v-12A1.5 1.5 0 0012.5 1H12a.5.5 0 000 1h.5a.5.5 0 01.5.5v12a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5v-12z" />
                    <path d="M10 7a1 1 0 112 0v5a1 1 0 11-2 0V7zm-6 4a1 1 0 112 0v1a1 1 0 11-2 0v-1zm4-3a1 1 0 00-1 1v3a1 1 0 102 0V9a1 1 0 00-1-1z" />
                  </svg>
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
            <li className="px-1 py-2 mt-3 mb-1 rounded-md hover:bg-primary hover:text-white">
              <NavLink to={'/logout'} className=" link">
                <div className="flex items-center">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    height="23"
                    width="23"
                    className="min-w-max"
                  >
                    <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z" />
                    <path d="M10.828.122A.5.5 0 0111 .5V1h.5A1.5 1.5 0 0113 2.5V15h1.5a.5.5 0 010 1h-13a.5.5 0 010-1H3V1.5a.5.5 0 01.43-.495l7-1a.5.5 0 01.398.117zM11.5 2H11v13h1V2.5a.5.5 0 00-.5-.5zM4 1.934V15h6V1.077l-6 .857z" />
                  </svg>
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
          <svg fill="currentColor" viewBox="0 0 16 16" height="25" width="25">
            <path
              fillRule="evenodd"
              d="M12.5 15a.5.5 0 01-.5-.5v-13a.5.5 0 011 0v13a.5.5 0 01-.5.5zM10 8a.5.5 0 01-.5.5H3.707l2.147 2.146a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 11.708.708L3.707 7.5H9.5a.5.5 0 01.5.5z"
            />
          </svg>
        </motion.div>
      </motion.div>
      <div className="m-3 md:hidden " onClick={() => setOpen(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={20}
          width={20}
          viewBox="0 0 448 512"
        >
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </div>
    </div>
  );
};

export default Sidebar;
