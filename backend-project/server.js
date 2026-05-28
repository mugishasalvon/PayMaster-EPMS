import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import { initDatabase, db } from './config/database.js';
import authRoutes from './routes/authRoutes.js';
import departmentRoutes from './routes/departmentRoutes.js';
import employeeRoutes from './routes/employeeRoutes.js';
import salaryRoutes from './routes/salaryRoutes.js';
import reportRoutes from './routes/reportRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/departments', departmentRoutes);
app.use('/api/employees', employeeRoutes);
app.use('/api/salaries', salaryRoutes);
app.use('/api/reports', reportRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'EPMS API is running' });
});

const createDefaultUser = async () => {
  try {
    const hashedPassword = await bcrypt.hash('1234567890', 10);
    await db.query(
      'INSERT INTO Users (username, password) VALUES (?, ?) ON DUPLICATE KEY UPDATE username = username',
      ['salvo', hashedPassword]
    );
    console.log('✅ Default user ready - Username: salvo, Password: 1234567890');
  } catch (error) {
    console.log('Default user already exists or error:', error.message);
  }
};

initDatabase().then(async () => {
  await createDefaultUser();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log('Login with: username=salvo, password=1234567890');
  });
}).catch(err => {
  console.error('Failed to initialize database:', err);
});
