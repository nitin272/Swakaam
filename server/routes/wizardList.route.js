const express = require('express');
const router = express.Router();
const Wizard_ListController = require('../controllers/wizardList.controller');
const upload = require('../middleware/multer.middleware.js');

// Get all users
router.get('/', Wizard_ListController.getAllUsers);
// Register route
router.post('/register',upload.single('profilePicture'), Wizard_ListController.register);
// Get user by ID
router.get('/:id', Wizard_ListController.getUserById);
// Update user details
router.put('/:id',upload.single('profilePicture'), Wizard_ListController.updateUser);
// Delete user
router.delete('/:id', Wizard_ListController.deleteUser);
// Export the router
module.exports = router;