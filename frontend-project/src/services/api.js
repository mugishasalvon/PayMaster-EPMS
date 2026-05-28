import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authService = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData),
};

export const departmentService = {
  getAll: () => api.get('/departments'),
  create: (data) => api.post('/departments', data),
};

export const employeeService = {
  getAll: () => api.get('/employees'),
  create: (data) => api.post('/employees', data),
};

export const salaryService = {
  getAll: () => api.get('/salaries'),
  create: (data) => api.post('/salaries', data),
  update: (id, data) => api.put(`/salaries/${id}`, data),
  delete: (id) => api.delete(`/salaries/${id}`),
};

export const reportService = {
  getDaily: (date) => api.get('/reports/daily', { params: { date } }),
  getWeekly: (startDate, endDate) => api.get('/reports/weekly', { params: { startDate, endDate } }),
  getMonthly: (month, year) => api.get('/reports/monthly', { params: { month, year } }),
  getEmployees: () => api.get('/reports/employees'),
  getDepartments: () => api.get('/reports/departments'),
};

export default api;
