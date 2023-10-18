import { useLocation } from 'react-router-dom';
import EmployeeSideBar from './Employee Sidebar/EmployeeSideBar';
import Cookies from 'js-cookie';
import { useParams } from 'react-router-dom';

function EmployeeDetailLayout({ children }: any) {
  const location = useLocation();
  const { employeeId } = useParams();
  const { positionId } = useParams();

  const sidebarPaths = ['/employee/detail'];

  const hiddenSidebarPaths = ['/dummy'];

  const isAuthenticated = !!Cookies.get('access_token');

  const shouldShowSidebar =
    isAuthenticated &&
    sidebarPaths.some((path) => location.pathname.startsWith(path)) &&
    !hiddenSidebarPaths.some((path) => location.pathname.startsWith(path));

  return (
    <div className="flex flex-col md:flex-row ">
      {shouldShowSidebar && (
        <EmployeeSideBar employeeId={employeeId} positionId={positionId} />
      )}
      <main
        className={
          shouldShowSidebar ? 'flex-1 mx-auto max-w-sm md:max-w-none' : 'w-full'
        }
      >
        {children}
      </main>
    </div>
  );
}

export default EmployeeDetailLayout;
