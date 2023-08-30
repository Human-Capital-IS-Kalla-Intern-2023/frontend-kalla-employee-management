// Library & Package Import
import { useLocation } from 'react-router-dom';

// Components Import
import Sidebar from './sidebar/SideBar';

function MainLayout({ children }: any) {
  const location = useLocation();

  const sidebarPaths = [
    '/dashboard',
    '/employee',
    '/reports',
    '/company',
    '/setting',
  ];

  const shouldShowSidebar = sidebarPaths.some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <div className="flex gap-5 ">
      {shouldShowSidebar && <Sidebar />}
      <main
        className={shouldShowSidebar ? 'flex-1 py-4 mx-auto' : 'py-4 mx-auto'}
      >
        {children}
      </main>
    </div>
  );
}

export default MainLayout;
