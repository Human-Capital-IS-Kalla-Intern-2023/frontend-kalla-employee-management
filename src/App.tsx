// Library & Package Import
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Layout Import
import MainLayout from './layout/MainLayout';
import PrivateRoute from './helpers/PrivateRoutes';

// Pages Import
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Directorate from './pages/Directorate';
import Employee from './pages/Employee';
import Setting from './pages/Setting';
import Company from './pages/Company';
import Reports from './pages/Reports';
import NotFound from './pages/NotFound';
import PermissionDenied from './pages/PermissionDenied';
import Unauthenticated from './pages/Unauthorized';

import './App.css';

const App = () => {
  return (
    <Router>
      <MainLayout className="font-poppins">
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
          />
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
