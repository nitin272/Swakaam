const Admin = require('../models/admin.model');
const bcrypt = require('bcrypt');

class AdminController {
    // Admin Registration
    static async register(req, res) {
        const { username, email, password, authType, profilePicture, contactNumber } = req.body;

        try {
            // Check if admin already exists
            const existingAdmin = await Admin.findOne({ email });
            if (existingAdmin) {
                return res.status(400).json({ message: 'Admin already exists' });
            }

            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);
            // Create new admin
            const newAdmin = new Admin({
                username,
                email,
                password : hashedPassword,
                authType,
                profilePicture,
                contactNumber
            });

            await newAdmin.save();

            res.status(201).json({ message: 'Admin registered successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    }

    // Admin Login
    static async login(req, res) {
        const { email, password } = req.body;
        try {
            // Find admin by email
            const admin = await Admin.findOne({email: email});
            if (!admin) {
                return res.status(400).json({ message: 'Invalid email or password' });
            }
            // Check password
            const isMatch = await bcrypt.compare(password, admin.password);
            if (!isMatch) {
                return res.status(400).json({ message: 'Invalid email or password' });
            }

            res.status(200).json({ message: 'Login successful', admin });

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }   
    }

}

module.exports = AdminController;
