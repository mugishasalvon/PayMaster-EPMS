@echo off
echo ========================================
echo EPMS - Setup and Installation
echo ========================================
echo.

echo [1/4] Installing Backend Dependencies...
cd backend-project
call npm install
if %errorlevel% neq 0 (
    echo ERROR: Backend installation failed!
    pause
    exit /b 1
)
echo Backend dependencies installed successfully!
echo.

echo [2/4] Installing Frontend Dependencies...
cd ..\frontend-project
call npm install
if %errorlevel% neq 0 (
    echo ERROR: Frontend installation failed!
    pause
    exit /b 1
)
echo Frontend dependencies installed successfully!
echo.

echo [3/4] Setup Complete!
echo.
echo ========================================
echo NEXT STEPS:
echo ========================================
echo.
echo 1. Make sure MySQL is running
echo 2. Update backend-project\.env with your MySQL password
echo 3. Start Backend: cd backend-project ^&^& npm start
echo 4. Start Frontend: cd frontend-project ^&^& npm run dev
echo 5. Open browser: http://localhost:5173
echo.
echo DEFAULT LOGIN CREDENTIALS:
echo Username: salvo
echo Password: 1234567890
echo.
echo ========================================
echo.
pause
