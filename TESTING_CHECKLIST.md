# ✅ EPMS Setup & Testing Checklist

Use this checklist to ensure everything is set up correctly.

---

## 📋 Pre-Setup Checklist

- [ ] Node.js installed (v16 or higher)
- [ ] MySQL Server installed
- [ ] MySQL Server is running
- [ ] npm is available (comes with Node.js)
- [ ] Text editor available (VS Code, Notepad++, etc.)

---

## 🔧 Installation Checklist

- [ ] Opened project folder: `MugishaMahoro_salvo_Practical_Exam_2026`
- [ ] Ran `setup.bat` OR manually installed dependencies
- [ ] Backend dependencies installed (`backend-project/node_modules` exists)
- [ ] Frontend dependencies installed (`frontend-project/node_modules` exists)
- [ ] Configured `backend-project/.env` with MySQL password
- [ ] Verified `.env` file has correct database credentials

---

## 🚀 Startup Checklist

- [ ] MySQL Server is running
- [ ] Opened Terminal 1 for backend
- [ ] Ran `start-backend.bat` OR `cd backend-project && npm start`
- [ ] Backend shows: "Database EPMS created or already exists"
- [ ] Backend shows: "All tables created successfully"
- [ ] Backend shows: "Default user ready - Username: salvo"
- [ ] Backend shows: "Server running on port 5000"
- [ ] Opened Terminal 2 for frontend
- [ ] Ran `start-frontend.bat` OR `cd frontend-project && npm run dev`
- [ ] Frontend shows: "Local: http://localhost:5173/"
- [ ] No error messages in either terminal

---

## 🌐 Access Checklist

- [ ] Opened browser (Chrome, Firefox, Edge, etc.)
- [ ] Navigated to `http://localhost:5173`
- [ ] Login page loaded successfully
- [ ] Default credentials visible on login page
- [ ] No console errors (Press F12 to check)

---

## 🔐 Login Checklist

- [ ] Entered username: `salvo`
- [ ] Entered password: `1234567890`
- [ ] Clicked "Login" button
- [ ] Successfully redirected to Employee page
- [ ] Navigation bar visible with all menu items
- [ ] Username "salvo" displayed in navbar
- [ ] No error messages

---

## 🏢 Department Testing Checklist

- [ ] Clicked "Department" in navigation
- [ ] Department page loaded
- [ ] Form visible with 2 fields (Code, Name)
- [ ] Added test department:
  - [ ] Code: `IT`
  - [ ] Name: `Information Technology`
- [ ] Success message appeared
- [ ] Department appears in the list below
- [ ] Added another department:
  - [ ] Code: `HR`
  - [ ] Name: `Human Resources`
- [ ] Both departments visible in list

---

## 👥 Employee Testing Checklist

- [ ] Clicked "Employee" in navigation
- [ ] Employee page loaded
- [ ] Form visible with all fields
- [ ] Department dropdown shows departments created earlier
- [ ] Added test employee:
  - [ ] Employee Number: `EMP001`
  - [ ] First Name: `Jean`
  - [ ] Last Name: `Mugisha`
  - [ ] Address: `Rubavu, Rwanda`
  - [ ] Position: `Software Developer`
  - [ ] Telephone: `+250788123456`
  - [ ] Gender: `Male`
  - [ ] Hired Date: (any date)
  - [ ] Department: `IT`
- [ ] Success message appeared
- [ ] Employee appears in the list below
- [ ] Added another employee with different details
- [ ] Both employees visible in list

---

## 💰 Salary Testing Checklist (CRUD Operations)

### Create (Insert)
- [ ] Clicked "Salary" in navigation
- [ ] Salary page loaded
- [ ] Employee dropdown shows employees created earlier
- [ ] Added test salary:
  - [ ] Employee: Selected from dropdown
  - [ ] Gross Salary: `500000`
  - [ ] Total Deduction: `50000`
  - [ ] Net Salary: Auto-calculated as `450000`
  - [ ] Month of Payment: (any date)
- [ ] Success message appeared
- [ ] Salary record appears in the list below

### Read (Retrieve)
- [ ] All salary records visible in table
- [ ] Employee names displayed correctly
- [ ] All amounts displayed correctly
- [ ] Dates formatted properly

### Update (Edit)
- [ ] Clicked "Edit" button on a salary record
- [ ] Form populated with existing data
- [ ] Changed Gross Salary to different amount
- [ ] Net Salary recalculated automatically
- [ ] Clicked "Update Salary" button
- [ ] Success message appeared
- [ ] Updated values visible in the list

### Delete (Remove)
- [ ] Clicked "Delete" button on a salary record
- [ ] Confirmation dialog appeared
- [ ] Confirmed deletion
- [ ] Success message appeared
- [ ] Record removed from the list

---

## 📊 Reports Testing Checklist

### Daily Report
- [ ] Clicked "Reports" in navigation
- [ ] Reports page loaded
- [ ] Selected "Daily Salary Report"
- [ ] Selected today's date
- [ ] Clicked "Generate Report"
- [ ] Report displayed (may be empty if no data for today)

### Weekly Report
- [ ] Selected "Weekly Salary Report"
- [ ] Selected start date (e.g., 7 days ago)
- [ ] Selected end date (today)
- [ ] Clicked "Generate Report"
- [ ] Report displayed with data in date range
- [ ] Totals calculated at bottom

### Monthly Report
- [ ] Selected "Monthly Salary Report"
- [ ] Selected current month
- [ ] Selected current year
- [ ] Clicked "Generate Report"
- [ ] Report displayed with monthly data
- [ ] Totals calculated correctly

### Employee Report
- [ ] Selected "Employee Report"
- [ ] Clicked "Generate Report"
- [ ] All employees listed
- [ ] Total payments count shown for each
- [ ] Department names displayed

### Department Report
- [ ] Selected "Department Report"
- [ ] Clicked "Generate Report"
- [ ] All departments listed
- [ ] Total employees count shown for each

---

## 🔄 Navigation Testing Checklist

- [ ] Clicked each menu item (Employee, Department, Salary, Reports)
- [ ] Each page loads correctly
- [ ] Navigation bar always visible
- [ ] Active page highlighted (if styled)
- [ ] No broken links

---

## 🚪 Logout Testing Checklist

- [ ] Clicked "Logout" in navigation
- [ ] Redirected to login page
- [ ] Cannot access other pages without logging in
- [ ] Logged in again successfully
- [ ] All features still working

---

## 📱 Responsive Design Testing Checklist

- [ ] Opened browser developer tools (F12)
- [ ] Toggled device toolbar (Ctrl+Shift+M)
- [ ] Tested mobile view (375px width)
  - [ ] Navigation works
  - [ ] Forms are usable
  - [ ] Tables scroll horizontally
- [ ] Tested tablet view (768px width)
  - [ ] Layout adjusts properly
  - [ ] All features accessible
- [ ] Tested desktop view (1920px width)
  - [ ] Full layout visible
  - [ ] No overflow issues

---

## 🐛 Error Handling Testing Checklist

- [ ] Tried logging in with wrong password
  - [ ] Error message displayed
- [ ] Tried adding employee without selecting department
  - [ ] Validation error shown
- [ ] Tried adding salary with empty fields
  - [ ] Validation prevents submission
- [ ] Checked browser console for errors (F12)
  - [ ] No critical errors

---

## 💾 Database Verification Checklist

- [ ] Opened MySQL Workbench or command line
- [ ] Connected to MySQL server
- [ ] Verified database `EPMS` exists
- [ ] Verified tables exist:
  - [ ] Department
  - [ ] Employee
  - [ ] Salary
  - [ ] Users
- [ ] Checked data in tables matches what's shown in UI

---

## 📝 Documentation Checklist

- [ ] Read `GETTING_STARTED.md`
- [ ] Read `CREDENTIALS.md`
- [ ] Reviewed `README.md`
- [ ] Checked `PROJECT_COMPLETE.md`
- [ ] All documentation files present

---

## ✅ Final Verification

- [ ] Backend running without errors
- [ ] Frontend running without errors
- [ ] Can login successfully
- [ ] Can add departments
- [ ] Can add employees
- [ ] Can perform all CRUD operations on salary
- [ ] Can generate all types of reports
- [ ] Can logout and login again
- [ ] Responsive design works
- [ ] No console errors
- [ ] Database contains test data

---

## 🎯 Completion Status

**Total Checklist Items:** 150+

**Items Completed:** _____ / 150+

**Percentage:** _____ %

---

## 🎉 When All Items Are Checked

Congratulations! Your EPMS system is fully functional and ready for use!

**Next Steps:**
1. Add real department data
2. Add real employee data
3. Start managing payroll
4. Generate regular reports
5. Create additional user accounts if needed

---

## 📞 If Something Doesn't Work

1. Check the troubleshooting section in `GETTING_STARTED.md`
2. Verify MySQL is running
3. Check `.env` configuration
4. Review terminal output for errors
5. Check browser console (F12) for frontend errors
6. Restart both backend and frontend servers

---

## 📋 Notes Section

Use this space to note any issues or observations:

```
_________________________________________________________________

_________________________________________________________________

_________________________________________________________________

_________________________________________________________________

_________________________________________________________________
```

---

**Testing Date:** _______________

**Tested By:** _______________

**Status:** [ ] Pass  [ ] Fail  [ ] Needs Review

---

**System is ready for production use!** ✅
