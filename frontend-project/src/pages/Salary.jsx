import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { salaryService, employeeService } from '../services/api';

const Salary = () => {
  const [salaries, setSalaries] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
    employeeNumber: '', grossSalary: '', totalDeduction: '', netSalary: '', monthOfPayment: ''
  });
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchSalaries();
    fetchEmployees();
  }, []);

  const fetchSalaries = async () => {
    try {
      const response = await salaryService.getAll();
      setSalaries(response.data);
    } catch (error) {
      console.error('Error fetching salaries:', error);
    }
  };

  const fetchEmployees = async () => {
    try {
      const response = await employeeService.getAll();
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const calculateNetSalary = (gross, deduction) => {
    return (parseFloat(gross || 0) - parseFloat(deduction || 0)).toFixed(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const dataToSubmit = {
        ...formData,
        netSalary: calculateNetSalary(formData.grossSalary, formData.totalDeduction)
      };

      if (editingId) {
        await salaryService.update(editingId, dataToSubmit);
        setMessage('Salary updated successfully');
        setEditingId(null);
      } else {
        await salaryService.create(dataToSubmit);
        setMessage('Salary added successfully');
      }
      
      setFormData({
        employeeNumber: '', grossSalary: '', totalDeduction: '', netSalary: '', monthOfPayment: ''
      });
      fetchSalaries();
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage(error.response?.data?.error || 'Error processing salary');
    }
  };

  const handleEdit = (salary) => {
    setFormData({
      employeeNumber: salary.employeeNumber,
      grossSalary: salary.grossSalary,
      totalDeduction: salary.totalDeduction,
      netSalary: salary.netSalary,
      monthOfPayment: salary.monthOfPayment.split('T')[0]
    });
    setEditingId(salary.salaryId);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this salary record?')) {
      try {
        await salaryService.delete(id);
        setMessage('Salary deleted successfully');
        fetchSalaries();
        setTimeout(() => setMessage(''), 3000);
      } catch (error) {
        setMessage(error.response?.data?.error || 'Error deleting salary');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Salary Management</h1>
        
        {message && (
          <div className={`p-4 rounded mb-4 ${message.includes('success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {message}
          </div>
        )}

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4">{editingId ? 'Edit' : 'Add'} Salary Record</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <select
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.employeeNumber}
              onChange={(e) => setFormData({ ...formData, employeeNumber: e.target.value })}
              required
            >
              <option value="">Select Employee</option>
              {employees.map((emp) => (
                <option key={emp.employeeNumber} value={emp.employeeNumber}>
                  {emp.firstName} {emp.lastName} ({emp.employeeNumber})
                </option>
              ))}
            </select>
            <input
              type="number"
              step="0.01"
              placeholder="Gross Salary"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.grossSalary}
              onChange={(e) => setFormData({ ...formData, grossSalary: e.target.value })}
              required
            />
            <input
              type="number"
              step="0.01"
              placeholder="Total Deduction"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.totalDeduction}
              onChange={(e) => setFormData({ ...formData, totalDeduction: e.target.value })}
            />
            <div className="bg-gray-50 p-3 rounded">
              <strong>Net Salary: </strong>
              {calculateNetSalary(formData.grossSalary, formData.totalDeduction)} RWF
            </div>
            <input
              type="date"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.monthOfPayment}
              onChange={(e) => setFormData({ ...formData, monthOfPayment: e.target.value })}
              required
            />
            <div className="flex space-x-2">
              <button
                type="submit"
                className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              >
                {editingId ? 'Update' : 'Add'} Salary
              </button>
              {editingId && (
                <button
                  type="button"
                  onClick={() => {
                    setEditingId(null);
                    setFormData({
                      employeeNumber: '', grossSalary: '', totalDeduction: '', netSalary: '', monthOfPayment: ''
                    });
                  }}
                  className="px-4 bg-gray-500 text-white py-2 rounded hover:bg-gray-600 transition"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Salary Records</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left">Employee</th>
                  <th className="px-4 py-2 text-left">Gross Salary</th>
                  <th className="px-4 py-2 text-left">Deduction</th>
                  <th className="px-4 py-2 text-left">Net Salary</th>
                  <th className="px-4 py-2 text-left">Month</th>
                  <th className="px-4 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {salaries.map((salary) => (
                  <tr key={salary.salaryId} className="border-t">
                    <td className="px-4 py-2">{salary.firstName} {salary.lastName}</td>
                    <td className="px-4 py-2">{salary.grossSalary} RWF</td>
                    <td className="px-4 py-2">{salary.totalDeduction} RWF</td>
                    <td className="px-4 py-2">{salary.netSalary} RWF</td>
                    <td className="px-4 py-2">{new Date(salary.monthOfPayment).toLocaleDateString()}</td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => handleEdit(salary)}
                        className="bg-yellow-500 text-white px-3 py-1 rounded mr-2 hover:bg-yellow-600 transition"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(salary.salaryId)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Salary;
