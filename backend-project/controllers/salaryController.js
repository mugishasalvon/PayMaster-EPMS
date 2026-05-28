import { db } from '../config/database.js';

export const createSalary = async (req, res) => {
  try {
    const { employeeNumber, grossSalary, totalDeduction, netSalary, monthOfPayment } = req.body;
    await db.query(
      'INSERT INTO Salary (employeeNumber, grossSalary, totalDeduction, netSalary, monthOfPayment) VALUES (?, ?, ?, ?, ?)',
      [employeeNumber, grossSalary, totalDeduction, netSalary, monthOfPayment]
    );
    res.status(201).json({ message: 'Salary record created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllSalaries = async (req, res) => {
  try {
    const [salaries] = await db.query(`
      SELECT s.*, e.firstName, e.lastName 
      FROM Salary s 
      JOIN Employee e ON s.employeeNumber = e.employeeNumber
    `);
    res.json(salaries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateSalary = async (req, res) => {
  try {
    const { id } = req.params;
    const { employeeNumber, grossSalary, totalDeduction, netSalary, monthOfPayment } = req.body;
    await db.query(
      'UPDATE Salary SET employeeNumber = ?, grossSalary = ?, totalDeduction = ?, netSalary = ?, monthOfPayment = ? WHERE salaryId = ?',
      [employeeNumber, grossSalary, totalDeduction, netSalary, monthOfPayment, id]
    );
    res.json({ message: 'Salary record updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteSalary = async (req, res) => {
  try {
    const { id } = req.params;
    await db.query('DELETE FROM Salary WHERE salaryId = ?', [id]);
    res.json({ message: 'Salary record deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
