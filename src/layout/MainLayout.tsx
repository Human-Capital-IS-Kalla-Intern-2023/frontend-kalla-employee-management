import Sidebar from './sidebar/SideBar';
import { useLocation } from 'react-router-dom';

function MainLayout({ children }: any) {
  const location = useLocation();

  const isLoginPage = location.pathname === '/';
  const isNotAllow = location.pathname === '/notallow';
  const isNotFound = location.pathname === '/notfound';
  const isDenied = location.pathname === '/permissiondenied'

  if (isLoginPage || isNotAllow || isNotFound || isDenied) {
    return <main className="py-4 mx-auto">{children}</main>;
  }

  return (
    <div className="flex gap-5 ">
      <Sidebar />
      <main className="flex-1 py-4 mx-auto">{children}</main>
    </div>
  );
}

export default MainLayout;