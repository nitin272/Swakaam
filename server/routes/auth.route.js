const express = require('express');
const router = express.Router();
const UserController = require('../controllers/auth.controller');

// Register route
router.post('/register', UserController.register);

module.exports = router;
