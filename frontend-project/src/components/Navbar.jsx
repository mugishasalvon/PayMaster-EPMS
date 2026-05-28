import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem('username');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    navigate('/login');
  };

  return (
    <nav className="bg-blue-600 text-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold">PayMaster EPMS</div>

          <div className="flex space-x-6">

            <Link to="/employee" className="hover:text-blue-200 transition">Employee</Link>
            <Link to="/department" className="hover:text-blue-200 transition">Department</Link>
            <Link to="/salary" className="hover:text-blue-200 transition">Salary</Link>
            <Link to="/reports" className="hover:text-blue-200 transition">Reports</Link>
            <button onClick={handleLogout} className="hover:text-blue-200 transition">Logout</button>
          </div>
          {username && <div className="text-sm">Welcome, {username}</div>}
        </div>
      </div>
    </nav>
  );
};






export default Navbar;



