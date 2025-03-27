const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/admin.controller');
const authMiddleware = require('../middleware/auth.middleware');
const upload = require('../middleware/multer.middleware.js');

// Register
router.post('/register',upload.single('profilePicture'), AdminController.register);

// Login
router.post('/login', AdminController.login);

router.put('/update/:id',upload.single('profilePicture'), AdminController.updateProfile);

// Protected Route - Get Admin Profile
router.get('/profile', authMiddleware, AdminController.getProfile);

module.exports = router;
