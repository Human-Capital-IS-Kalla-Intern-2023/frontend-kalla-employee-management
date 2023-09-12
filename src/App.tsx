// Import Library & Package
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Layout
import MainLayout from './layout/MainLayout';
import PrivateRoute from './middleware/PrivateRoutes';

//  Import Pages
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Directorate from './pages/Directorate';
import Division from './pages/Division';
import Employee from './pages/Employee';
import Setting from './pages/Setting';
import Company from './pages/Company';
import Reports from './pages/Reports';
import NotFound from './pages/NotFound';
import PermissionDenied from './pages/PermissionDenied';
import Unauthenticated from './pages/Unauthorized';

// Import CSS
import './App.css';
import AddModal from './components/modals/AddModal';
import EditModal from './components/modals/EditModal';
import DetailModal from './components/modals/DetailModal';
import DeleteModal from './components/modals/DeleteModal';
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
          />
          <Route
            path="/reports"
            element={<PrivateRoute path="/reports" element={<Reports />} />}
          />
          <Route
            path="/company"
            element={<PrivateRoute path="/company" element={<Company />} />}
          />
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
          </Route>

          <Route
            path="/setting/:settingId"
            element={
              <PrivateRoute path="/setting/:settingId" element={<Setting />} />
            }
          />
          <Route path="/company/directorate/add" element={<AddModal />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/unauthorized" element={<Unauthenticated />} />
          <Route path="/permissiondenied" element={<PermissionDenied />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
