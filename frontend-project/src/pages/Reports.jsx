import { useState } from 'react';
import Navbar from '../components/Navbar';
import { reportService } from '../services/api';

const Reports = () => {
  const [reportType, setReportType] = useState('daily');
  const [reportData, setReportData] = useState([]);
  const [filters, setFilters] = useState({
    date: new Date().toISOString().split('T')[0],
    startDate: '',
    endDate: '',
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear()
  });

  const fetchReport = async () => {
    try {
      let response;
      switch (reportType) {
        case 'daily':
          response = await reportService.getDaily(filters.date);
          break;
        case 'weekly':
          response = await reportService.getWeekly(filters.startDate, filters.endDate);
          break;
        case 'monthly':
          response = await reportService.getMonthly(filters.month, filters.year);
          break;
        case 'employees':
          response = await reportService.getEmployees();
          break;
        case 'departments':
          response = await reportService.getDepartments();
          break;
        default:
          return;
      }
      setReportData(response.data);
    } catch (error) {
      console.error('Error fetching report:', error);
    }
  };

  const calculateTotals = () => {
    if (reportType === 'employees' || reportType === 'departments') return null;
    
    const totals = reportData.reduce((acc, item) => ({
      grossSalary: acc.grossSalary + parseFloat(item.grossSalary || 0),
      totalDeduction: acc.totalDeduction + parseFloat(item.totalDeduction || 0),
      netSalary: acc.netSalary + parseFloat(item.netSalary || 0)
    }), { grossSalary: 0, totalDeduction: 0, netSalary: 0 });

    return totals;
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Reports</h1>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4">Generate Report</h2>
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Report Type</label>
            <select
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
            >
              <option value="daily">Daily Salary Report</option>
              <option value="weekly">Weekly Salary Report</option>
              <option value="monthly">Monthly Salary Report</option>
              <option value="employees">Employee Report</option>
              <option value="departments">Department Report</option>
            </select>
          </div>

          {reportType === 'daily' && (
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Date</label>
              <input
                type="date"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={filters.date}
                onChange={(e) => setFilters({ ...filters, date: e.target.value })}
              />
            </div>
          )}

          {reportType === 'weekly' && (
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 mb-2">Start Date</label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={filters.startDate}
                  onChange={(e) => setFilters({ ...filters, startDate: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">End Date</label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={filters.endDate}
                  onChange={(e) => setFilters({ ...filters, endDate: e.target.value })}
                />
              </div>
            </div>
          )}

          {reportType === 'monthly' && (
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 mb-2">Month</label>
                <select
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={filters.month}
                  onChange={(e) => setFilters({ ...filters, month: e.target.value })}
                >
                  {[...Array(12)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {new Date(2000, i).toLocaleString('default', { month: 'long' })}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Year</label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={filters.year}
                  onChange={(e) => setFilters({ ...filters, year: e.target.value })}
                />
              </div>
            </div>
          )}

          <button
            onClick={fetchReport}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Generate Report
          </button>
        </div>

        {reportData.length > 0 && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Report Results</h2>
            <div className="overflow-x-auto">
              {(reportType === 'daily' || reportType === 'weekly' || reportType === 'monthly') && (
                <>
                  <table className="min-w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-2 text-left">Employee</th>
                        <th className="px-4 py-2 text-left">Position</th>
                        <th className="px-4 py-2 text-left">Department</th>
                        <th className="px-4 py-2 text-left">Gross Salary</th>
                        <th className="px-4 py-2 text-left">Deduction</th>
                        <th className="px-4 py-2 text-left">Net Salary</th>
                        <th className="px-4 py-2 text-left">Payment Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {reportData.map((item, index) => (
                        <tr key={index} className="border-t">
                          <td className="px-4 py-2">{item.firstName} {item.lastName}</td>
                          <td className="px-4 py-2">{item.position}</td>
                          <td className="px-4 py-2">{item.departmentName}</td>
                          <td className="px-4 py-2">{item.grossSalary} RWF</td>
                          <td className="px-4 py-2">{item.totalDeduction} RWF</td>
                          <td className="px-4 py-2">{item.netSalary} RWF</td>
                          <td className="px-4 py-2">{new Date(item.monthOfPayment).toLocaleDateString()}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot className="bg-gray-50 font-bold">
                      <tr>
                        <td colSpan="3" className="px-4 py-2 text-right">TOTALS:</td>
                        <td className="px-4 py-2">{calculateTotals()?.grossSalary.toFixed(2)} RWF</td>
                        <td className="px-4 py-2">{calculateTotals()?.totalDeduction.toFixed(2)} RWF</td>
                        <td className="px-4 py-2">{calculateTotals()?.netSalary.toFixed(2)} RWF</td>
                        <td className="px-4 py-2"></td>
                      </tr>
                    </tfoot>
                  </table>
                </>
              )}

              {reportType === 'employees' && (
                <table className="min-w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left">Employee #</th>
                      <th className="px-4 py-2 text-left">Name</th>
                      <th className="px-4 py-2 text-left">Position</th>
                      <th className="px-4 py-2 text-left">Department</th>
                      <th className="px-4 py-2 text-left">Total Payments</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reportData.map((item) => (
                      <tr key={item.employeeNumber} className="border-t">
                        <td className="px-4 py-2">{item.employeeNumber}</td>
                        <td className="px-4 py-2">{item.firstName} {item.lastName}</td>
                        <td className="px-4 py-2">{item.position}</td>
                        <td className="px-4 py-2">{item.departmentName}</td>
                        <td className="px-4 py-2">{item.totalPayments}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {reportType === 'departments' && (
                <table className="min-w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left">Department Code</th>
                      <th className="px-4 py-2 text-left">Department Name</th>
                      <th className="px-4 py-2 text-left">Total Employees</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reportData.map((item) => (
                      <tr key={item.departmentCode} className="border-t">
                        <td className="px-4 py-2">{item.departmentCode}</td>
                        <td className="px-4 py-2">{item.departmentName}</td>
                        <td className="px-4 py-2">{item.totalEmployees}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reports;
