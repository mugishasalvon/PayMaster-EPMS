import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export const db = pool.promise();

export const initDatabase = async () => {
  try {
    const connection = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT
    });

    const conn = connection.promise();

    await conn.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`);
    console.log('Database EPMS created or already exists');

    await conn.query(`USE ${process.env.DB_NAME}`);

    await conn.query(`
      CREATE TABLE IF NOT EXISTS Department (
        departmentCode VARCHAR(50) PRIMARY KEY,
        departmentName VARCHAR(100) NOT NULL
      )
    `);

    await conn.query(`
      CREATE TABLE IF NOT EXISTS Employee (
        employeeNumber VARCHAR(50) PRIMARY KEY,
        firstName VARCHAR(100) NOT NULL,
        lastName VARCHAR(100) NOT NULL,
        address VARCHAR(255),
        position VARCHAR(100),
        telephone VARCHAR(20),
        gender ENUM('Male', 'Female', 'Other'),
        hiredDate DATE,
        departmentCode VARCHAR(50),
        FOREIGN KEY (departmentCode) REFERENCES Department(departmentCode) ON DELETE SET NULL
      )
    `);

    await conn.query(`
      CREATE TABLE IF NOT EXISTS Salary (
        salaryId INT AUTO_INCREMENT PRIMARY KEY,
        employeeNumber VARCHAR(50) NOT NULL,
        grossSalary DECIMAL(15, 2) NOT NULL,
        totalDeduction DECIMAL(15, 2) DEFAULT 0,
        netSalary DECIMAL(15, 2) NOT NULL,
        monthOfPayment DATE NOT NULL,
        FOREIGN KEY (employeeNumber) REFERENCES Employee(employeeNumber) ON DELETE CASCADE
      )
    `);

    await conn.query(`
      CREATE TABLE IF NOT EXISTS Users (
        userId INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    console.log('All tables created successfully');
    await conn.end();
  } catch (error) {
    console.error('Database initialization error:', error);
    throw error;
  }
};
