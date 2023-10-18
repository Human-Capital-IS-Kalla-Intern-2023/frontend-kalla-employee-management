import { useLocation } from 'react-router-dom';
import Sidebar from './Main Sidebar/SideBar';
import Cookies from 'js-cookie';

function MainLayout({ children }: any) {
  const location = useLocation();

  const sidebarPaths = [
    '/dashboard',
    '/employee',
    '/reports',
    '/company',
    '/setting',
    '/position',
    '/salary',
  ];

  const hiddenSidebarPaths = [
    '/salary/configures/payroll_component',
    '/employee/detail',
  ];

  const isAuthenticated = !!Cookies.get('access_token');

  const shouldShowSidebar =
    isAuthenticated &&
    sidebarPaths.some((path) => location.pathname.startsWith(path)) &&
    !hiddenSidebarPaths.some((path) => location.pathname.startsWith(path));

  return (
    <div className="flex flex-col md:flex-row ">
      {shouldShowSidebar && <Sidebar />}
      <main
        className={
          shouldShowSidebar
            ? 'flex-1 py-2 mx-auto max-w-sm md:max-w-none'
            : 'w-full'
        }
      >
        {children}
      </main>
    </div>
  );
}

export default MainLayout;
