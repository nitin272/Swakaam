const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/admin.controller');
const authMiddleware = require('../middleware/auth.middleware');

// Register
router.post('/register', AdminController.register);

// Login
router.post('/login', AdminController.login);

// Protected Route - Get Admin Profile
router.get('/profile', authMiddleware, AdminController.getProfile);

module.exports = router;
