const express = require('express');
const UserController = require('../controllers/user.controller');
const router = express.Router();
const upload = require('../middleware/multer.middleware.js');
// User Authentication
router.post('/register',upload.single('profilePicture'), UserController.register);
router.post('/login', UserController.login);
router.post('/logout', UserController.logout);

// CRUD Operations
router.get('/users', UserController.getAllUsers); // Get all users
router.get('/users/:id', UserController.getUserById); // Get user by ID
router.put('/users/:id',upload.single('profilePicture'), UserController.updateUser); // Update user
router.delete('/users/:id', UserController.deleteUser); // Delete user

module.exports = router;
