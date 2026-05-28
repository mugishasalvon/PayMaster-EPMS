import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { employeeService, departmentService } from '../services/api';


const Employee = () => {
  const [employees, setEmployees] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [formData, setFormData] = useState({
    employeeNumber: '', firstName: '', lastName: '', address: '',
    position: '', telephone: '', gender: 'Male', hiredDate: '', departmentCode: ''
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchEmployees();
    fetchDepartments();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await employeeService.getAll();
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const fetchDepartments = async () => {
    try {
      const response = await departmentService.getAll();
      setDepartments(response.data);
    } catch (error) {
      console.error('Error fetching departments:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await employeeService.create(formData);
      setMessage('Employee added successfully');
      setFormData({
        employeeNumber: '', firstName: '', lastName: '', address: '',
        position: '', telephone: '', gender: 'Male', hiredDate: '', departmentCode: ''
      });
      fetchEmployees();
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage(error.response?.data?.error || 'Error adding employee');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />

      <div className="container mx-auto px-4 pt-4 pb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800">Employee Management</h1>
        
        {message && (
          <div className={`p-4 rounded mb-4 ${message.includes('success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {message}
          </div>
        )}

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4">Add New Employee</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Employee Number"
              className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.employeeNumber}
              onChange={(e) => setFormData({ ...formData, employeeNumber: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="First Name"
              className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Address"
              className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            />
            <input
              type="text"
              placeholder="Position"
              className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.position}
              onChange={(e) => setFormData({ ...formData, position: e.target.value })}
            />
            <input
              type="text"
              placeholder="Telephone"
              className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.telephone}
              onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
            />
            <select
              className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.gender}
              onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <input
              type="date"
              className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.hiredDate}
              onChange={(e) => setFormData({ ...formData, hiredDate: e.target.value })}
            />
            <select
              className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.departmentCode}
              onChange={(e) => setFormData({ ...formData, departmentCode: e.target.value })}
              required
            >
              <option value="">Select Department</option>
              {departments.map((dept) => (
                <option key={dept.departmentCode} value={dept.departmentCode}>
                  {dept.departmentName}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="md:col-span-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Add Employee
            </button>
          </form>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Employee List</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left">Employee #</th>
                  <th className="px-4 py-2 text-left">Name</th>
                  <th className="px-4 py-2 text-left">Position</th>
                  <th className="px-4 py-2 text-left">Telephone</th>
                  <th className="px-4 py-2 text-left">Gender</th>
                  <th className="px-4 py-2 text-left">Hired Date</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((emp) => (
                  <tr key={emp.employeeNumber} className="border-t">
                    <td className="px-4 py-2">{emp.employeeNumber}</td>
                    <td className="px-4 py-2">{emp.firstName} {emp.lastName}</td>
                    <td className="px-4 py-2">{emp.position}</td>
                    <td className="px-4 py-2">{emp.telephone}</td>
                    <td className="px-4 py-2">{emp.gender}</td>
                    <td className="px-4 py-2">{emp.hiredDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto">
        {/* eslint-disable-next-line import/no-unresolved */}
        <Footer />
      </div>
    </div>
  );
};


export default Employee;
