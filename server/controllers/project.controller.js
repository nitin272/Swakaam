const Project = require('../models/project.model');

class ProjectController {
    // Create a new project
    static async createProject(req, res) {
        try {
            const project = new Project(req.body);
            await project.save();
            res.status(201).json({ message: 'Project created successfully', project });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error', error });
        }
    }

    // Get all projects
    static async getAllProjects(req, res) {
        try {
            const projects = await Project.find().populate('assignedWizardListID');
            res.status(200).json(projects);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error', error });
        }
    }

    // Get a project by ID
    static async getProjectById(req, res) {
        try {
            const project = await Project.findById(req.params.id).populate('assignedWizardListID');
            if (!project) {
                return res.status(404).json({ message: 'Project not found' });
            }
            res.status(200).json(project);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error', error });
        }
    }

    // Update a project
    static async updateProject(req, res) {
        try {
            const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!updatedProject) {
                return res.status(404).json({ message: 'Project not found' });
            }
            res.status(200).json({ message: 'Project updated successfully', updatedProject });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error', error });
        }
    }

    // Delete a project
    static async deleteProject(req, res) {
        try {
            const deletedProject = await Project.findByIdAndDelete(req.params.id);
            if (!deletedProject) {
                return res.status(404).json({ message: 'Project not found' });
            }
            res.status(200).json({ message: 'Project deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error', error });
        }
    }
}

module.exports = ProjectController;
