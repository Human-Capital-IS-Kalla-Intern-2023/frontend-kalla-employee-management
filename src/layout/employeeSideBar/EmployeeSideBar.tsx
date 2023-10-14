// Library & Package Import
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { NavLink, useLocation, Link } from 'react-router-dom';

import ButtonLogout from '../../components/buttons/LogoutButton';

// Assets Import
// import logoKalla from '../../assets/img/kalla-logo-full.webp';
import logo232 from '../../assets/img/logo-232.webp';
import logo464 from '../../assets/img/logo-464.webp';
import logo300 from '../../assets/img/logo-300.webp';
import logo660 from '../../assets/img/logo-660.webp';
import logo1280 from '../../assets/img/logo-1280.webp';
import logo3000 from '../../assets/img/logo-3000.webp';

import {
  CloseSidebarIcon,
  ReponsiveSidebarIcon,
  UserGear,
  UserIcon,
  TeamIcon,
  AssigmentIcon,
  EligiblesIcon,
  LeftArrowIcon2,
  SalaryIcon,
} from '../../assets/icons/icon';

const EmployeeSideBar = (employeeData: any) => {
  const employeeId = employeeData.employeeId;
  const employeePositionId = employeeData.positionId;

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

  return (
    <>
      <div className="shadow-lg ">
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
          <div className="flex items-center gap-2.5 font-medium border-b py-3 border-slate-300 mx-3">
            <img
              alt="Kalla Logo"
              src={logo232}
              srcSet={`
      ${logo232} 232w,
      ${logo300} 300w,
      ${logo464} 464w,
      ${logo660} 660w,
      ${logo1280} 1280w,
      ${logo3000} 3000w
    `}
              sizes="(min-width: 1060px) 223px, (min-width: 940px) calc(113vw - 957px), (min-width: 880px) calc(110vw - 933px), (min-width: 840px) calc(70vw - 584px), (min-width: 680px) 232px, (min-width: 640px) calc(995vw - 6335px), (min-width: 600px) calc(-135vw + 914px), (min-width: 500px) calc(-95vw + 682px), calc(-7.78vw + 255px)"
              width={232}
              height={96}
              className="object-fit"
            />
          </div>
          <div className="flex items-center py-4 border-y border-slate-300 hover:bg-slate-200">
            <Link to="/employee">
              <button
                className="flex items-center"
                aria-label="Back to Employee DB"
              >
                <LeftArrowIcon2 className="w-10 h-10" />
                <span className="ml-2">Back to Employee DB</span>
              </button>
            </Link>
          </div>
          <div className="flex flex-col h-full">
            <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex  flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100   md:h-[68%] h-[70%] rounded-md">
              <li
                className={`px-1 py-2 mb-1 rounded-md hover:bg-primary hover:text-white ${
                  pathname.includes('/employee/detail/personal-data')
                    ? 'bg-primary text-white hover:bg-green-600'
                    : 'hover:text-white'
                }`}
              >
                <NavLink
                  to={`/employee/detail/personal-data/${employeeId}/${employeePositionId}`}
                >
                  <div className="flex items-center">
                    <UserIcon className="min-w-max" />
                    <motion.div
                      variants={textAnimation}
                      animate={open ? 'open' : 'closed'}
                      className="ml-2 link"
                    >
                      Personal Data
                    </motion.div>
                  </div>
                </NavLink>
              </li>
              <li
                className={`px-1 py-2 mb-1 rounded-md hover:bg-primary hover:text-white ${
                  pathname.includes('/employee/detail/attendence')
                    ? 'bg-primary text-white hover:bg-green-600'
                    : 'hover:text-white'
                }`}
              >
                <NavLink to={`/salary/configures`}>
                  <div className="flex items-center">
                    <SalaryIcon className="w-6 h-6 ml-[-3px] min-w-max" />
                    <motion.div
                      variants={textAnimation}
                      animate={open ? 'open' : 'closed'}
                      className="ml-2 link"
                    >
                      Configure Salary
                    </motion.div>
                  </div>
                </NavLink>
              </li>
              <li
                className={`px-1 py-2 mb-1 rounded-md hover:bg-primary hover:text-white ${
                  pathname.includes('employee/detail/eligibles')
                    ? 'bg-primary text-white hover:bg-green-600'
                    : 'hover:text-white'
                }`}
              >
                <NavLink
                  to={`/employee/detail/eligibles/${employeeId}/${employeePositionId}`}
                >
                  <div className="flex items-center">
                    <EligiblesIcon className="min-w-max" />
                    <motion.div
                      variants={textAnimation}
                      animate={open ? 'open' : 'closed'}
                      className="ml-2 link"
                    >
                      Eligibles
                    </motion.div>
                  </div>
                </NavLink>
              </li>
              <li
                className={`px-1 py-2 mb-1 rounded-md hover:bg-primary hover:text-white ${
                  pathname.includes('/employee/detail/assigments')
                    ? 'bg-primary text-white hover:bg-green-600'
                    : 'hover:text-white'
                }`}
              >
                <NavLink to={`/employee/detail/assigements/${employeeId}`}>
                  <div className="flex items-center">
                    <AssigmentIcon className="min-w-max" />
                    <motion.div
                      variants={textAnimation}
                      animate={open ? 'open' : 'closed'}
                      className="ml-2 link"
                    >
                      Assigments
                    </motion.div>
                  </div>
                </NavLink>
              </li>
              <li
                className={`px-1 py-2 mb-1 rounded-md hover:bg-primary hover:text-white ${
                  pathname.includes('/employee/detail/teams')
                    ? 'bg-primary text-white hover:bg-green-600'
                    : 'hover:text-white'
                }`}
              >
                <NavLink to={`/employee/detail/teams/${employeeId}`}>
                  <div className="flex items-center">
                    <TeamIcon className="min-w-max" />
                    <motion.div
                      variants={textAnimation}
                      animate={open ? 'open' : 'closed'}
                      className="ml-2 link"
                    >
                      Teams
                    </motion.div>
                  </div>
                </NavLink>
              </li>

              <li
                className={`px-1 py-2 mb-1 rounded-md hover:bg-primary hover:text-white ${
                  pathname.includes('/employee/detail/attendence')
                    ? 'bg-primary text-white hover:bg-green-600'
                    : 'hover:text-white'
                }`}
              >
                <NavLink to={`/employee/detail/attendence/${employeeId}`}>
                  <div className="flex items-center">
                    <UserGear className="min-w-max" />
                    <motion.div
                      variants={textAnimation}
                      animate={open ? 'open' : 'closed'}
                      className="ml-2 link"
                    >
                      Attendence Setting
                    </motion.div>
                  </div>
                </NavLink>
              </li>
              <li className="border-t border-slate-300">
                <ButtonLogout />
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
            <CloseSidebarIcon />
          </motion.div>
        </motion.div>
        <div className="m-3 md:hidden" onClick={() => setOpen(true)}>
          <ReponsiveSidebarIcon />
        </div>
      </div>
    </>
  );
};

export default EmployeeSideBar;
