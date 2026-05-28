import express from 'express';
import { getDailyReport, getWeeklyReport, getMonthlyReport, getEmployeeReport, getDepartmentReport } from '../controllers/reportController.js';

const router = express.Router();

router.get('/daily', getDailyReport);
router.get('/weekly', getWeeklyReport);
router.get('/monthly', getMonthlyReport);
router.get('/employees', getEmployeeReport);
router.get('/departments', getDepartmentReport);

export default router;
