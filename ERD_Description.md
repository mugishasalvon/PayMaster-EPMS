# Employee Payroll Management System - ERD Description

## Entities and Relationships

### 1. Department
- **Primary Key**: departmentCode
- **Attributes**: departmentCode, departmentName

### 2. Employee
- **Primary Key**: employeeNumber
- **Foreign Key**: departmentCode (references Department)
- **Attributes**: employeeNumber, firstName, lastName, address, position, telephone, gender, hiredDate, departmentCode

### 3. Salary
- **Primary Key**: salaryId (auto-generated)
- **Foreign Key**: employeeNumber (references Employee)
- **Attributes**: salaryId, employeeNumber, grossSalary, totalDeduction, netSalary, monthOfPayment

## Relationships

1. **Department to Employee**: One-to-Many (1:N)
   - One department can have many employees
   - Each employee belongs to one department

2. **Employee to Salary**: One-to-Many (1:N)
   - One employee can have many salary records (monthly payments)
   - Each salary record belongs to one employee

## Cardinalities
- Department (1) ----< Employee (N)
- Employee (1) ----< Salary (N)

## ERD Notes
- Draw this ERD on paper first using pencils
- Then digitize using draw.io, Lucidchart, or Edraw Max
- Include proper cardinality symbols (crow's foot notation)
- Show primary keys (PK) and foreign keys (FK) clearly
