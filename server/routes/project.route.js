const express = require('express');
const router = express.Router();
const ProjectController = require('../controllers/project.controller');

// CRUD routes for Project
router.post('/projects', ProjectController.createProject);
router.get('/projects', ProjectController.getAllProjects);
router.get('/projects/:id', ProjectController.getProjectById);
router.put('/projects/:id', ProjectController.updateProject);
router.delete('/projects/:id', ProjectController.deleteProject);

module.exports = router;
