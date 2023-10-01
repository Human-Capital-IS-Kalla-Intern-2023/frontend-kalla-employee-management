import { useLocation } from 'react-router-dom';
import Sidebar from './sidebar/SideBar';
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
    <div className="flex gap-5 ">
      {shouldShowSidebar && <Sidebar />}
      <main className={shouldShowSidebar ? 'flex-1 py-4 mx-auto' : 'w-full'}>
        {children}
      </main>
    </div>
  );
}

export default MainLayout;
