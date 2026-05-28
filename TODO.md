# EPMS - TODO

## Plan approval
- [x] Gather repo structure
- [ ] Create required submission folder (and place ERD + deliverables)
- [ ] Propose detailed edit/build plan for ERD + MySQL schema + backend + frontend


## Implementation steps (after plan approval)
1. Create ERD export (image) under project folder
2. Backend (Node/Express)
   - Initialize backend-project (package.json, server)
   - Setup MySQL connection
   - Create EPMS database + tables: Employee, Department, Salary
   - Create users table and authentication endpoints
   - Implement CRUD endpoints (Insert for Employee/Department/Salary; Salary supports delete/update/retrieve)
   - Implement reports endpoints: daily, weekly, monthly
3. Frontend (React + Tailwind)
   - Install dependencies: react-router-dom, axios, tailwindcss, postcss, autoprefixer
   - Build pages: Login, Employee, Department, Salary, Reports, Logout
   - Responsive navigation/menu
   - Connect forms to backend via axios
4. Testing
   - Run MySQL schema setup
   - Run backend and frontend, verify CRUD + reports
5. Documentation
   - Ensure folder name: FirstName_LastName_National_Practical_Exam_2026
   - Add run instructions in README

