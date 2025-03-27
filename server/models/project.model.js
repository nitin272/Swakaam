const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    projectDescription: {
        type: String,
        required: true
    },
    companyDomain: {
        type: [String], // Array of company domains
        required: true
    },
    projectDuration: {
        type: Number, // Duration in days/weeks/months (specify in API)
        required: true
    },
    guidelinesForDeveloper: {
        type: [String], // Array of guidelines
        default: []
    },
    urgent: {
        type: Boolean,
        default: false
    },
    requirements: {
        type: [String], // List of requirements
        required: true
    },
    projectLevel: {
        type: String,
        enum: ['Beginner', 'Intermediate', 'Advanced'], // Define levels
        required: true
    },
    incentiveProvided: {
        type: String, // Example: "1000 USD", "5000 INR"
        required: true
    },
    techStack: {
        type: [String], // List of technologies
        required: true
    },
    progressStatus: {
        type: String,
        enum: ['Not Started', 'In Progress', 'Completed', 'On Hold'],
        default: 'Not Started'
    },
    hiringType: {
        type: String,
        enum: ['Full-Time', 'Part-Time', 'Freelance', 'Internship'],
        required: true
    },
    deadline: {
        type: Date,
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    assignedWizardListID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'WizardList', // Reference to WizardList collection
        required: true
    }
});

module.exports = mongoose.model('Project', projectSchema);
