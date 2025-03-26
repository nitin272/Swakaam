const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    // level: {
    //     type: String,
    //     required: false
    // },
    profilePicture: {
        type: String // Store URL or file path
    },
    contactNumber: {
        type: String
    },
    authType: {
        type: String, // e.g., "Google", "Facebook", "Email"
        required: true
    },
    feedbackNotes: {
        type: [String], // Array of feedback notes
        default: []
    }
},{ timestamps: true});

const Auth = mongoose.model('User', userSchema);

module.exports = Auth;