import { db } from '../config/database.js';

export const createDepartment = async (req, res) => {
  try {
    const { departmentCode, departmentName } = req.body;
    await db.query('INSERT INTO Department (departmentCode, departmentName) VALUES (?, ?)', [departmentCode, departmentName]);
    res.status(201).json({ message: 'Department created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllDepartments = async (req, res) => {
  try {
    const [departments] = await db.query('SELECT * FROM Department');
    res.json(departments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
