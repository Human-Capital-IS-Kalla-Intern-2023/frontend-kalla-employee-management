import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainLayout from './layout/MainLayout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Employee from './pages/Employee';
import Setting from './pages/Setting';
import Company from './pages/Company';
import Reports from './pages/Reports';
import Logout from './pages/Logout';
import NotFound from './pages/NotFound';
import PermissionDenied from './pages/PermissionDenied';

import './App.css';
const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/company/:aID" element={<Company />} />
          <Route path="/setting/:settingId" element={<Setting />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/permissiondenied" element={<PermissionDenied />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;