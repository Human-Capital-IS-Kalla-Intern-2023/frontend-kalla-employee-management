// Import Library & Package
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Layout
import MainLayout from './layout/MainLayout';
import EmployeeDetailLayout from './layout/EmployeeDetailLayout';
import PrivateRoute from './middleware/PrivateRoutes';

//  Import Pages
import Login from './pages/Auth/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Employee from './pages/Employee/Employee';
import Reports from './pages/Reports/Reports';
import ProfileEmployee from './pages/Employee/ProfileEmployee';
import EligiblesEmployee from './pages/Employee/EligiblesEmployee';
import EditEligibles from './pages/Employee/EditEligibles';

import Position from './pages/Position/Position';
import Grade from './pages/Salary/Grade';
import MasterSalary from './pages/Salary/MasterSalary';

import Company from './pages/Company/Company';
import Directorate from './pages/Company/Directorate';
import Division from './pages/Company/Division';
import Section from './pages/Company/Section';
import Location from './pages/Company/Location';

import Setting from './pages/Profile/Setting';

import NotFound from './pages/Auth/NotFound';
import PermissionDenied from './pages/Auth/PermissionDenied';
import Unauthenticated from './pages/Auth/Unauthorized';

// Import Components
import AddModal from './components/modals/AddModal';
import EditModal from './components/modals/EditModal';
import DetailModal from './components/modals/DetailModal';
import DeleteModal from './components/modals/DeleteModal';

// Import CSS
import './App.css';
import ConfigureSalary from './pages/Salary/ConfigureSalary';
import AddConfigureSalary from './pages/Salary/AddConfigureSalary';
import EditPropertySalaryCard from './components/cards/EditPropertySalaryCard';

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard"
            element={<PrivateRoute path="/dashboard" element={<Dashboard />} />}
          />

          <Route
            path="/employee"
            element={<PrivateRoute path="/employee" element={<Employee />} />}
          >
            <Route path="add" element={<AddModal />} />
            <Route path="edit/:modalEditId" element={<EditModal />} />
            <Route path="delete/:modalDeleteId" element={<DeleteModal />} />
          </Route>

          <Route
            path="/employee/detail/personal-data/:employeeId"
            element={
              <EmployeeDetailLayout>
                <ProfileEmployee />
              </EmployeeDetailLayout>
            }
          >
            <Route path="edit" element={<EditModal />} />
          </Route>
          <Route
            path="/employee/detail/eligibles/:employeeId"
            element={
              <EmployeeDetailLayout>
                <EligiblesEmployee />
              </EmployeeDetailLayout>
            }
          >
            <Route path="add" element={<AddModal />} />
          </Route>

          <Route
            path="/employee/detail/eligibles/edit/:employeeId"
            element={
              <EmployeeDetailLayout>
                <EditEligibles />
              </EmployeeDetailLayout>
            }
          />

          <Route
            path="/reports"
            element={<PrivateRoute path="/reports" element={<Reports />} />}
          />

          <Route
            path="/position/posisi"
            element={
              <PrivateRoute path="/company/posisi" element={<Position />} />
            }
          >
            <Route path="add" element={<AddModal />} />
            <Route path="edit/:modalEditId" element={<EditModal />} />
            <Route path="detail/:modalDetailId" element={<DetailModal />} />
            <Route path="delete/:modalDeleteId" element={<DeleteModal />} />
          </Route>

          <Route
            path="/position/grade"
            element={<PrivateRoute path="/company/grade" element={<Grade />} />}
          >
            <Route path="add" element={<AddModal />} />
            <Route path="edit/:modalEditId" element={<EditModal />} />
            <Route path="detail/:modalDetailId" element={<DetailModal />} />
            <Route path="delete/:modalDeleteId" element={<DeleteModal />} />
          </Route>

          <Route
            path="/company/business unit"
            element={
              <PrivateRoute
                path="/company/business unit"
                element={<Company />}
              />
            }
          >
            <Route path="add" element={<AddModal />} />
            <Route path="edit/:modalEditId" element={<EditModal />} />
            <Route path="detail/:modalDetailId" element={<DetailModal />} />
            <Route path="delete/:modalDeleteId" element={<DeleteModal />} />
          </Route>

          <Route
            path="/company/directorate"
            element={
              <PrivateRoute
                path="/company/directorate"
                element={<Directorate />}
              />
            }
          >
            <Route path="add" element={<AddModal />} />
            <Route path="edit/:modalEditId" element={<EditModal />} />
            <Route path="detail/:modalDetailId" element={<DetailModal />} />
            <Route path="delete/:modalDeleteId" element={<DeleteModal />} />
          </Route>

          <Route
            path="/company/division"
            element={
              <PrivateRoute path="/company/division" element={<Division />} />
            }
          >
            <Route path="add" element={<AddModal />} />
            <Route path="edit/:modalEditId" element={<EditModal />} />
            <Route path="detail/:modalDetailId" element={<DetailModal />} />
            <Route path="delete/:modalDeleteId" element={<DeleteModal />} />
          </Route>

          <Route
            path="/company/section"
            element={
              <PrivateRoute path="/company/section" element={<Section />} />
            }
          >
            <Route path="add" element={<AddModal />} />
            <Route path="edit/:modalEditId" element={<EditModal />} />
            <Route path="detail/:modalDetailId" element={<DetailModal />} />
            <Route path="delete/:modalDeleteId" element={<DeleteModal />} />
          </Route>

          <Route
            path="/company/location"
            element={
              <PrivateRoute path="/company/location" element={<Location />} />
            }
          >
            <Route path="add" element={<AddModal />} />
            <Route path="edit/:modalEditId" element={<EditModal />} />
            <Route path="detail/:modalDetailId" element={<DetailModal />} />
            <Route path="delete/:modalDeleteId" element={<DeleteModal />} />
          </Route>

          <Route
            path="/salary/regulation"
            element={
              <PrivateRoute
                path="/salary/regulation"
                element={<MasterSalary />}
              />
            }
          >
            <Route path="add" element={<AddModal />} />
            <Route path="edit/:modalEditId" element={<EditModal />} />
            <Route path="detail/:modalDetailId" element={<DetailModal />} />
            <Route path="delete/:modalDeleteId" element={<DeleteModal />} />
          </Route>

          <Route
            path="/salary/configures"
            element={
              <PrivateRoute
                path="/salary/configures"
                element={<ConfigureSalary />}
              />
            }
          >
            {/* <Route path="edit/:modalEditId" element={<EditModal />} /> */}
            <Route path="detail/:modalDetailId" element={<DetailModal />} />
            <Route path="delete/:modalDeleteId" element={<DeleteModal />} />
          </Route>

          <Route
            path="/salary/configures/payroll_component/add"
            element={
              <PrivateRoute
                path="/salary/configures/payroll_component/add"
                element={<AddConfigureSalary />}
              />
            }
          ></Route>

          <Route
            path="/salary/configures/payroll_component/edit/:salaryId"
            element={
              <PrivateRoute
                path="/salary/configures/payroll_component/edit/:salaryId"
                element={<EditPropertySalaryCard />}
              />
            }
          ></Route>

          <Route
            path="/setting/:settingId"
            element={
              <PrivateRoute path="/setting/:settingId" element={<Setting />} />
            }
          />
          <Route path="/*" element={<NotFound />} />
          <Route path="/unauthorized" element={<Unauthenticated />} />
          <Route path="/permissiondenied" element={<PermissionDenied />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
