# Employee Payroll Management System (EPMS)

## Project Overview
PayMaster Ltd - Employee Payroll Management System
A full-stack web application for managing employee payroll, departments, and generating reports.

## Technology Stack
- **Frontend**: React.js, Tailwind CSS, Axios, React Router
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Authentication**: JWT

## Project Structure
```
MugishaMahoro_salvo_Practical_Exam_2026/
├── backend-project/          # Backend API
│   ├── config/              # Database configuration
│   ├── controllers/         # Business logic
│   ├── routes/             # API routes
│   └── server.js           # Entry point
├── frontend-project/        # React frontend
│   └── src/
│       ├── components/     # Reusable components
│       ├── pages/         # Page components
│       └── services/      # API services
└── ERD_Description.md      # Database design
```

## Database Design (ERD)

### Entities:
1. **Department** (departmentCode PK, departmentName)
2. **Employee** (employeeNumber PK, firstName, lastName, address, position, telephone, gender, hiredDate, departmentCode FK)
3. **Salary** (salaryId PK, employeeNumber FK, grossSalary, totalDeduction, netSalary, monthOfPayment)

### Relationships:
- Department (1) → Employee (N)
- Employee (1) → Salary (N)

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MySQL Server
- npm or yarn

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend-project
```

2. Install dependencies:
```bash
npm install
```

3. Configure database in `.env` file:
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=EPMS
DB_PORT=3306
PORT=5000
JWT_SECRET=epms_secret_key_2026
```

4. Start the backend server:
```bash
npm start
```

The backend will:
- Create the EPMS database automatically
- Create all required tables (Department, Employee, Salary, Users)
- Run on http://localhost:5000

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend-project
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will run on http://localhost:5173

## Creating First User Account

The default user is created automatically when you start the backend server:

**Default Credentials:**
- Username: `salvo`
- Password: `1234567890`

The user is created automatically on server startup. Just start the backend and use these credentials to login.

If you want to create additional users, send a POST request to:
```
POST http://localhost:5000/api/auth/register
Body: {
  "username": "your_username",
  "password": "your_password"
}
```

## Features

### 1. Authentication
- Login/Logout functionality
- JWT-based authentication

### 2. Department Management
- Add new departments
- View all departments

### 3. Employee Management
- Add new employees
- View all employees
- Link employees to departments

### 4. Salary Management (Full CRUD)
- Create salary records
- View all salary records
- Update salary records
- Delete salary records
- Automatic net salary calculation

### 5. Reports
- Daily salary reports
- Weekly salary reports
- Monthly salary reports
- Employee summary reports
- Department summary reports

## API Endpoints

### Authentication
- POST `/api/auth/register` - Register new user
- POST `/api/auth/login` - Login

### Departments
- GET `/api/departments` - Get all departments
- POST `/api/departments` - Create department

### Employees
- GET `/api/employees` - Get all employees
- POST `/api/employees` - Create employee

### Salaries
- GET `/api/salaries` - Get all salaries
- POST `/api/salaries` - Create salary
- PUT `/api/salaries/:id` - Update salary
- DELETE `/api/salaries/:id` - Delete salary

### Reports
- GET `/api/reports/daily?date=YYYY-MM-DD`
- GET `/api/reports/weekly?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD`
- GET `/api/reports/monthly?month=MM&year=YYYY`
- GET `/api/reports/employees`
- GET `/api/reports/departments`

## Usage Guide

1. **Login**: Use your credentials to access the system
2. **Add Department**: Navigate to Department page and add departments first
3. **Add Employee**: Navigate to Employee page and add employees (requires existing department)
4. **Manage Salary**: Navigate to Salary page to add, edit, or delete salary records
5. **Generate Reports**: Navigate to Reports page and select report type with filters

## Responsive Design
The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile devices

## Notes
- Ensure MySQL server is running before starting the backend
- The database and tables are created automatically on first run
- Default backend port: 5000
- Default frontend port: 5173
- Net salary is calculated automatically: Gross Salary - Total Deduction

## Developer
MugishaMahoro Salvo
PayMaster Ltd - Rubavu District, Rwanda
