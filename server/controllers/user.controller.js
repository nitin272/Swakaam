const User = require('../models/user.model');
const bcrypt = require('bcrypt');

class UserController {
    // Register a new user
    static async register(req, res) {
        const { email, username, password, authType, expertise, maxLevel, profilePicture, contactNumber, location, hiredType } = req.body;

        try {
            // Check if user already exists
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: 'User already exists' });
            }

            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Create a new user
            const newUser = new User({
                email,
                username,
                password: hashedPassword,
                authType,
                expertise: expertise || [],
                projectsCompleted: 0,
                maxLevel,
                credibilityScore: 0,
                eligible: false,
                profilePicture,
                contactNumber,
                location,
                ratingsAndReviews: [],
                dateJoined: new Date(),
                workingFor: null, // No company assigned initially
                hiredType,
                lastHired: 0
            });

            await newUser.save();

            res.status(201).json({ message: 'User registered successfully', user: newUser });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    }

    // Get all users
    static async getAllUsers(req, res) {
        try {
            const users = await User.find();
            res.status(200).json(users);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    }

    // Get user by ID
    static async getUserById(req, res) {
        const { id } = req.params;
        try {
            const user = await User.findById(id);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(user);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    }

    // Update user details
    static async updateUser(req, res) {
        const { id } = req.params;
        const updatedData = req.body;

        try {
            const user = await User.findByIdAndUpdate(id, updatedData, { new: true });
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json({ message: 'User updated successfully', user });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    }

    // Delete user
    static async deleteUser(req, res) {
        const { id } = req.params;
        try {
            const user = await User.findByIdAndDelete(id);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json({ message: 'User deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    }
}

module.exports = UserController;
