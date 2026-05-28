import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Employee from './pages/Employee';
import Department from './pages/Department';
import Salary from './pages/Salary';
import Reports from './pages/Reports';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/employee" element={<PrivateRoute><Employee /></PrivateRoute>} />
        <Route path="/department" element={<PrivateRoute><Department /></PrivateRoute>} />
        <Route path="/salary" element={<PrivateRoute><Salary /></PrivateRoute>} />
        <Route path="/reports" element={<PrivateRoute><Reports /></PrivateRoute>} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
