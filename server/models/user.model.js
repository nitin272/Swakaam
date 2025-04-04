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
    profilePicture: {
        type: String 
    },
    contactNumber: {
        type: String
    },
    feedbackNotes: {
        type: [String], 
        default: []
    }
},{ timestamps: true});

const User = mongoose.model('User', userSchema);

module.exports = User;