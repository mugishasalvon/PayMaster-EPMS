# EPMS Quick Start Guide

## Step-by-Step Setup

### 1. Install Dependencies

**Backend:**
```bash
cd backend-project
npm install
```

**Frontend:**
```bash
cd frontend-project
npm install
```

### 2. Configure MySQL Database

Edit `backend-project/.env`:
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=YOUR_MYSQL_PASSWORD
DB_NAME=EPMS
DB_PORT=3306
PORT=5000
JWT_SECRET=epms_secret_key_2026
```

### 3. Start MySQL Server

Make sure MySQL is running on your machine.

### 4. Start Backend Server

```bash
cd backend-project
npm start
```

Expected output:
```
Database EPMS created or already exists
All tables created successfully
Server running on port 5000
```

### 5. Login to Application

The backend automatically creates a default user on startup.

**Default Login Credentials:**
- Username: `salvo`
- Password: `1234567890`

No need to manually create a user!

### 6. Start Frontend

Open a new terminal:
```bash
cd frontend-project
npm run dev
```

Expected output:
```
VITE ready in XXX ms
Local: http://localhost:5173/
```

### 7. Access the Application

Open browser and go to: `http://localhost:5173`

**Login with:**
- Username: `salvo`
- Password: `1234567890`

## Testing the Application

### 1. Add Department
- Navigate to "Department" page
- Add: Code: `IT`, Name: `Information Technology`

### 2. Add Employee
- Navigate to "Employee" page
- Fill in employee details
- Select the department you created

### 3. Add Salary
- Navigate to "Salary" page
- Select employee
- Enter gross salary and deductions
- Net salary calculates automatically

### 4. Generate Reports
- Navigate to "Reports" page
- Select report type (Daily/Weekly/Monthly)
- Choose date/date range
- Click "Generate Report"

## Troubleshooting

### Backend won't start
- Check if MySQL is running
- Verify database credentials in `.env`
- Check if port 5000 is available

### Frontend won't start
- Check if backend is running
- Verify port 5173 is available
- Clear browser cache

### Can't login
- Ensure you created a user account
- Check backend console for errors
- Verify MySQL connection

### Database errors
- Run `database_setup.sql` manually in MySQL Workbench
- Check MySQL user permissions

## Default Ports
- Backend API: `http://localhost:5000`
- Frontend: `http://localhost:5173`
- MySQL: `localhost:3306`

## Important Notes
1. Always start backend before frontend
2. Create at least one department before adding employees
3. Employees must exist before creating salary records
4. Use the Reports page to view daily, weekly, and monthly summaries
