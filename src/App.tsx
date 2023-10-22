// Import Library & Package
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Layout
import MainLayout from './layout/MainLayout';
import EmployeeDetailLayout from './layout/EmployeeDetailLayout';
import PrivateRoute from './middleware/PrivateRoutes';

//  Login & Dashboard Page
import Login from './pages/auth/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Reports from './pages/reports/Reports';

// Employee Page
import Employee from './pages/employee/Employee';
import DetailEmployee from './pages/employee/DetailEmployee';
import EligiblesEmployee from './pages/employee/eligibles/EligiblesEmployee';
import SetEligiblesCard from './components/modals/eligibles/SetEligiblesModal';
import EditEligibles from './pages/employee/eligibles/EditEligibles';
import AddEligibles from './pages/employee/eligibles/AddEligibles';

// Company Page
import Company from './pages/company/Company';
import Directorate from './pages/company/Directorate';
import Division from './pages/company/Division';
import Section from './pages/company/Section';
import Location from './pages/company/Location';
import Position from './pages/position/Position';
import Grade from './pages/company/Grade';

// Salary Page
import Compensation from './pages/salary/compensation/Compensation';
import CompensationDetail from './pages/salary/compensation/CompensationDetail';
import CompensationAddCard from './components/cards/compensation/CompensationAddCard';
import CompensationPeople from './pages/salary/compensation/CompensationPeople';
import MasterSalary from './pages/salary/master/MasterSalary';
import ConfigureSalary from './pages/salary/configure/ConfigureSalary';
import AddConfigureSalary from './pages/salary/configure/AddConfigureSalary';
import EditPropertySalaryCard from './components/cards/configure/EditPropertySalaryCard';

// Setting Page
import Setting from './pages/profile/Setting';

// Error Page
import NotFound from './pages/auth/NotFound';
import PermissionDenied from './pages/auth/PermissionDenied';
import Unauthenticated from './pages/auth/Unauthorized';

// Import Components
import AddModal from './components/modals/AddModal';
import EditModal from './components/modals/EditModal';
import DetailModal from './components/modals/DetailModal';
import DeleteModal from './components/modals/DeleteModal';

// Import CSS
import './App.css';
import CompensationPeopleEditCard from './components/cards/compensation/edit compensation/CompensationPeopleEditCard';

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

          {/* Employee Route Start */}
          <Route
            path="/employee"
            element={<PrivateRoute path="/employee" element={<Employee />} />}
          >
            <Route path="add" element={<AddModal />} />
            <Route path="edit/:modalEditId" element={<EditModal />} />
            <Route path="delete/:modalDeleteId" element={<DeleteModal />} />
          </Route>

          <Route
            path="/employee/detail/personal-data/:employeeId/:positionId"
            element={
              <EmployeeDetailLayout>
                <DetailEmployee />
              </EmployeeDetailLayout>
            }
          >
            <Route path="edit" element={<EditModal />} />
          </Route>
          <Route
            path="/employee/detail/eligibles/:employeeId/:positionId"
            element={
              <EmployeeDetailLayout>
                <EligiblesEmployee />
              </EmployeeDetailLayout>
            }
          >
            <Route path="set" element={<SetEligiblesCard />} />
          </Route>

          <Route
            path="/employee/detail/eligibles/:employeeId/:positionId/add-eligibles"
            element={
              <EmployeeDetailLayout>
                <AddEligibles />
              </EmployeeDetailLayout>
            }
          />

          <Route
            path="/employee/detail/eligibles/:employeeId/:positionId/edit"
            element={
              <EmployeeDetailLayout>
                <EditEligibles />
              </EmployeeDetailLayout>
            }
          />

          {/* Employee Route Start */}

          {/* Position Route Start */}
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
          {/* Position Route End */}

          {/* Company Route Start */}
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
            path="/reports"
            element={<PrivateRoute path="/reports" element={<Reports />} />}
          />
          {/* Company Route End */}

          {/* Salary Route Start */}
          <Route
            path="/salary/compensation"
            element={
              <PrivateRoute
                path="/salary/compensation"
                element={<Compensation />}
              />
            }
          >
            <Route path="add" element={<CompensationAddCard />} />
          </Route>

          <Route
            path="/salary/compensation/detail"
            element={
              <PrivateRoute
                path="/salary/compensation/detail"
                element={<CompensationDetail />}
              />
            }
          ></Route>

          <Route
            path="/salary/compensation/detail/people"
            element={
              <PrivateRoute
                path="/salary/compensation/detail/people"
                element={<CompensationPeople />}
              />
            }
          ></Route>

          <Route
            path="/salary/compensation/detail/people/edit"
            element={
              <PrivateRoute
                path="/salary/compensation/detail/people/edit"
                element={<CompensationPeopleEditCard />}
              />
            }
          ></Route>

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

          {/* Salary Route End */}

          <Route
            path="/setting/:settingId"
            element={
              <PrivateRoute path="/setting/:settingId" element={<Setting />} />
            }
          />

          {/* Error Route Start */}
          <Route path="/*" element={<NotFound />} />
          <Route path="/unauthorized" element={<Unauthenticated />} />
          <Route path="/permissiondenied" element={<PermissionDenied />} />
          {/* Error Route End */}
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
