import express from 'express';
import { createSalary, getAllSalaries, updateSalary, deleteSalary } from '../controllers/salaryController.js';

const router = express.Router();

router.post('/', createSalary);
router.get('/', getAllSalaries);
router.put('/:id', updateSalary);
router.delete('/:id', deleteSalary);

export default router;
