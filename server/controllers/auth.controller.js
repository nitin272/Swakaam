const Auth = require('../models/auth.model');
const bcrypt = require('bcrypt');

class AuthController {
    // User Registration
    static async register(req, res) {
        const { email, username, password, level, profilePicture, contactNumber, authType } = req.body;

        try {
            // Check if user already exists
            const existingUser = await Auth.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: 'User already exists' });
            }

            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Create new user
            const newUser = new Auth({
                email,
                username,
                password: hashedPassword,
                level,
                profilePicture,
                contactNumber,
                authType
            });

            await newUser.save();

            res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    }
}

module.exports = AuthController;
