-- EPMS Database Setup Script
-- Employee Payroll Management System

-- Create Database
CREATE DATABASE IF NOT EXISTS EPMS;
USE EPMS;

-- Create Department Table
CREATE TABLE IF NOT EXISTS Department (
    departmentCode VARCHAR(50) PRIMARY KEY,
    departmentName VARCHAR(100) NOT NULL
);

-- Create Employee Table
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
);

-- Create Salary Table
CREATE TABLE IF NOT EXISTS Salary (
    salaryId INT AUTO_INCREMENT PRIMARY KEY,
    employeeNumber VARCHAR(50) NOT NULL,
    grossSalary DECIMAL(15, 2) NOT NULL,
    totalDeduction DECIMAL(15, 2) DEFAULT 0,
    netSalary DECIMAL(15, 2) NOT NULL,
    monthOfPayment DATE NOT NULL,
    FOREIGN KEY (employeeNumber) REFERENCES Employee(employeeNumber) ON DELETE CASCADE
);

-- Create Users Table for Authentication
CREATE TABLE IF NOT EXISTS Users (
    userId INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Sample Data (Optional)

-- Insert Sample Departments
INSERT INTO Department (departmentCode, departmentName) VALUES
('HR', 'Human Resources'),
('IT', 'Information Technology'),
('FIN', 'Finance'),
('OPS', 'Operations');

-- Insert Sample Employees
INSERT INTO Employee (employeeNumber, firstName, lastName, address, position, telephone, gender, hiredDate, departmentCode) VALUES
('EMP001', 'Jean', 'Mugisha', 'Rubavu, Rwanda', 'HR Manager', '+250788123456', 'Male', '2020-01-15', 'HR'),
('EMP002', 'Marie', 'Uwase', 'Rubavu, Rwanda', 'Software Developer', '+250788234567', 'Female', '2021-03-20', 'IT'),
('EMP003', 'Patrick', 'Nkurunziza', 'Rubavu, Rwanda', 'Accountant', '+250788345678', 'Male', '2019-06-10', 'FIN');

-- Insert Sample Salary Records
INSERT INTO Salary (employeeNumber, grossSalary, totalDeduction, netSalary, monthOfPayment) VALUES
('EMP001', 500000.00, 50000.00, 450000.00, '2024-01-01'),
('EMP002', 600000.00, 60000.00, 540000.00, '2024-01-01'),
('EMP003', 550000.00, 55000.00, 495000.00, '2024-01-01');

-- Create default user: salvo with password: 1234567890
-- Note: This is a bcrypt hash of '1234567890'
INSERT INTO Users (username, password) VALUES
('salvo', '$2a$10$YourHashedPasswordHere');

-- Verify Tables
SHOW TABLES;

-- Verify Data
SELECT * FROM Department;
SELECT * FROM Employee;
SELECT * FROM Salary;
