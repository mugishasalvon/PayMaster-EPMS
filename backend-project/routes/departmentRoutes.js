import express from 'express';
import { createDepartment, getAllDepartments } from '../controllers/departmentController.js';

const router = express.Router();

router.post('/', createDepartment);
router.get('/', getAllDepartments);

export default router;
