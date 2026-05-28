import { db } from '../config/database.js';

export const createEmployee = async (req, res) => {
  try {
    const { employeeNumber, firstName, lastName, address, position, telephone, gender, hiredDate, departmentCode } = req.body;
    await db.query(
      'INSERT INTO Employee (employeeNumber, firstName, lastName, address, position, telephone, gender, hiredDate, departmentCode) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [employeeNumber, firstName, lastName, address, position, telephone, gender, hiredDate, departmentCode]
    );
    res.status(201).json({ message: 'Employee created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllEmployees = async (req, res) => {
  try {
    const [employees] = await db.query('SELECT * FROM Employee');
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
