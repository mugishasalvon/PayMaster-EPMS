import { db } from '../config/database.js';

export const getDailyReport = async (req, res) => {
  try {
    const { date } = req.query;
    const [report] = await db.query(`
      SELECT s.*, e.firstName, e.lastName, e.position, d.departmentName
      FROM Salary s
      JOIN Employee e ON s.employeeNumber = e.employeeNumber
      LEFT JOIN Department d ON e.departmentCode = d.departmentCode
      WHERE DATE(s.monthOfPayment) = ?
    `, [date]);
    res.json(report);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getWeeklyReport = async (req, res) => {
  try {
    const { startDate, endDate } = req.query;
    const [report] = await db.query(`
      SELECT s.*, e.firstName, e.lastName, e.position, d.departmentName
      FROM Salary s
      JOIN Employee e ON s.employeeNumber = e.employeeNumber
      LEFT JOIN Department d ON e.departmentCode = d.departmentCode
      WHERE s.monthOfPayment BETWEEN ? AND ?
    `, [startDate, endDate]);
    res.json(report);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getMonthlyReport = async (req, res) => {
  try {
    const { month, year } = req.query;
    const [report] = await db.query(`
      SELECT s.*, e.firstName, e.lastName, e.position, d.departmentName
      FROM Salary s
      JOIN Employee e ON s.employeeNumber = e.employeeNumber
      LEFT JOIN Department d ON e.departmentCode = d.departmentCode
      WHERE MONTH(s.monthOfPayment) = ? AND YEAR(s.monthOfPayment) = ?
    `, [month, year]);
    res.json(report);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getEmployeeReport = async (req, res) => {
  try {
    const [report] = await db.query(`
      SELECT e.*, d.departmentName, COUNT(s.salaryId) as totalPayments
      FROM Employee e
      LEFT JOIN Department d ON e.departmentCode = d.departmentCode
      LEFT JOIN Salary s ON e.employeeNumber = s.employeeNumber
      GROUP BY e.employeeNumber
    `);
    res.json(report);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getDepartmentReport = async (req, res) => {
  try {
    const [report] = await db.query(`
      SELECT d.*, COUNT(e.employeeNumber) as totalEmployees
      FROM Department d
      LEFT JOIN Employee e ON d.departmentCode = e.departmentCode
      GROUP BY d.departmentCode
    `);
    res.json(report);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
