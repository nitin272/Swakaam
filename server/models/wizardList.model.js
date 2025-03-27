const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    authType: {
        type: String,
        required: true,
        enum: ['email', 'google', 'facebook']
    },
    expertise: {
        type: [String], // Array of expertise areas
        default: []
    },
    projectsCompleted: {
        type: Number,
        default: 0
    },
    maxLevel: {
        type: String,
        required: false
    },
    credibilityScore: {
        type: Number,
        default: 0
    },
    eligible: {
        type: Boolean,
        default: false
    },
    profilePicture: {
        type: String,
        required: false
    },
    contactNumber: {
        type: String,
        required: false
    },
    location: {
        type: String,
        required: false
    },
    ratingsAndReviews: {
        type: [{
            reviewer: String,
            rating: Number, // Rating out of 5
            comment: String,
            date: Date
        }],
        default: []
    },
    dateJoined: {
        type: Date,
        default: Date.now
    },
    workingFor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company', // Foreign Key reference to Company model
        required: false
    },
    hiredType: {
        type: String,
        required: false
    },
    lastHired: {
        type: Number, 
        default: 0
    },
    isworking: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

const Wizard_List = mongoose.model('wizard_List', userSchema);

module.exports = Wizard_List;
