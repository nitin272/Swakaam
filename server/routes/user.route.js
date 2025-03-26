const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');

// Get all users
router.get('/', UserController.getAllUsers);
// Register route
router.post('/register', UserController.register);
// Get user by ID
router.get('/:id', UserController.getUserById);
// Update user details
router.put('/:id', UserController.updateUser);
// Delete user
router.delete('/:id', UserController.deleteUser);
// Export the router
module.exports = router;