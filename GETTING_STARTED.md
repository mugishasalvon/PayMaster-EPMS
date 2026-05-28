# 🚀 Getting Started with EPMS

## Employee Payroll Management System
**PayMaster Ltd - Rubavu District, Rwanda**

---

## 📋 Prerequisites

Before you begin, ensure you have:
- ✅ Node.js (v16 or higher) installed
- ✅ MySQL Server installed and running
- ✅ npm (comes with Node.js)

---

## ⚡ Quick Setup (3 Steps)

### Step 1: Install Dependencies

**Option A: Use the setup script (Recommended)**
```bash
# Double-click setup.bat
# OR run in terminal:
setup.bat
```

**Option B: Manual installation**
```bash
# Install backend dependencies
cd backend-project
npm install

# Install frontend dependencies
cd ../frontend-project
npm install
```

### Step 2: Configure Database

Edit `backend-project/.env` file:
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=YOUR_MYSQL_PASSWORD_HERE
DB_NAME=EPMS
DB_PORT=3306
PORT=5000
JWT_SECRET=epms_secret_key_2026
```

**Important:** Replace `YOUR_MYSQL_PASSWORD_HERE` with your actual MySQL password!

### Step 3: Start the Application

**Option A: Use start scripts**
```bash
# Terminal 1: Start backend
start-backend.bat

# Terminal 2: Start frontend
start-frontend.bat
```

**Option B: Manual start**
```bash
# Terminal 1: Start backend
cd backend-project
npm start

# Terminal 2: Start frontend
cd frontend-project
npm run dev
```

---

## 🔐 Login Credentials

The system automatically creates a default user when the backend starts.

**Username:** `salvo`  
**Password:** `1234567890`

These credentials are displayed on the login page for your convenience.

---

## 🌐 Access the Application

Once both servers are running:

1. Open your browser
2. Go to: `http://localhost:5173`
3. Login with the credentials above
4. Start managing payroll!

---

## 📊 Using the System

### 1️⃣ Add Departments First
- Click "Department" in the navigation
- Add department code and name
- Example: Code: `IT`, Name: `Information Technology`

### 2️⃣ Add Employees
- Click "Employee" in the navigation
- Fill in employee details
- Select a department (must exist first!)
- Submit the form

### 3️⃣ Manage Salaries
- Click "Salary" in the navigation
- Select an employee
- Enter gross salary and deductions
- Net salary calculates automatically
- You can Edit or Delete salary records

### 4️⃣ Generate Reports
- Click "Reports" in the navigation
- Choose report type:
  - **Daily Report**: Select a specific date
  - **Weekly Report**: Select start and end dates
  - **Monthly Report**: Select month and year
  - **Employee Report**: View all employees with payment counts
  - **Department Report**: View departments with employee counts
- Click "Generate Report"

---

## 🔧 Troubleshooting

### Backend won't start
- ✅ Check if MySQL is running
- ✅ Verify database password in `.env` file
- ✅ Ensure port 5000 is not in use

### Frontend won't start
- ✅ Make sure backend is running first
- ✅ Check if port 5173 is available
- ✅ Clear browser cache and try again

### Can't login
- ✅ Ensure backend is running and shows "Default user ready"
- ✅ Use exact credentials: `salvo` / `1234567890`
- ✅ Check browser console for errors

### Database errors
- ✅ Verify MySQL is running
- ✅ Check MySQL credentials in `.env`
- ✅ Ensure MySQL user has proper permissions

---

## 📁 Project Structure

```
MugishaMahoro_salvo_Practical_Exam_2026/
├── backend-project/         # Node.js + Express API
├── frontend-project/        # React.js Application
├── setup.bat               # Installation script
├── start-backend.bat       # Backend launcher
├── start-frontend.bat      # Frontend launcher
├── CREDENTIALS.md          # Login information
├── QUICK_START.md          # Quick reference guide
└── README.md               # Full documentation
```

---

## 🎯 Key Features

✨ **User Authentication** - Secure login with JWT  
✨ **Department Management** - Add and view departments  
✨ **Employee Management** - Add and view employees  
✨ **Salary Management** - Full CRUD operations  
✨ **Automatic Calculations** - Net salary computed automatically  
✨ **Comprehensive Reports** - Daily, weekly, monthly reports  
✨ **Responsive Design** - Works on all devices  
✨ **Modern UI** - Clean interface with Tailwind CSS  

---

## 📞 Support

If you encounter any issues:

1. Check the `QUICK_START.md` for detailed instructions
2. Review the `TROUBLESHOOTING` section above
3. Verify all prerequisites are installed
4. Ensure MySQL is running and configured correctly

---

## 👨‍💻 Developer Information

**Developer:** MugishaMahoro Salvo  
**Company:** PayMaster Ltd  
**Location:** Rubavu District, Western Province, Rwanda  
**Project:** Employee Payroll Management System (EPMS)  
**Year:** 2026  

---

## 🎉 You're All Set!

The system is now ready to use. Enjoy managing your payroll efficiently!

**Default Access:**
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000
- Username: salvo
- Password: 1234567890

---

**Happy Payroll Management! 🚀**
