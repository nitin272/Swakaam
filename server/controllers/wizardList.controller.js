const Wizard_List = require('../models/user.model');
const bcrypt = require('bcrypt');
const {uploadOnCloudinary} = require('../config/cloudinary');
class WizardListController {
    // Register a new user
    static async register(req, res) {
        const { email, username, password, authType, expertise, maxLevel, contactNumber, location, hiredType } = req.body;
        
        try {
            // Check if user already exists
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: 'User already exists' });
            }
    
            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);
    
            // Upload profile picture to Cloudinary if provided
            let profilePicture = null;
            if (req.file) {
                const { secure_url } = await uploadOnCloudinary(req.file.path);
                profilePicture = secure_url;
            }
    
            // Create a new user
            const newUser = new User({
                email,
                username,
                password: hashedPassword,
                authType,
                expertise: expertise ? expertise.split(',') : [], // Ensure array format
                projectsCompleted: 0,
                maxLevel: maxLevel || 0, // Default value if not provided
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
            const users = await Wizard_List.find();
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
            const user = await Wizard_List.findById(id);
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
            let user = await Wizard_List.findById(id);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            // Handle profile picture update
            if (req.file) {
                const { secure_url } = await uploadOnCloudinary(req.file.path);
                // Delete old profile picture from Cloudinary (if exists)
                if (user.profilePicture) {
                    const publicId = user.profilePicture.split('/').pop().split('.')[0]; // Extract public ID from URL
                    await cloudinary.uploader.destroy(publicId);
                }
                updatedData.profilePicture = secure_url;
            }

            // Update user in database
            const updatedUser = await Wizard_List.findByIdAndUpdate(id, updatedData, { new: true });
            res.status(200).json({ message: 'User updated successfully', updatedUser });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    }

    // Delete user
    static async deleteUser(req, res) {
        const { id } = req.params;
        try {
            const user = await Wizard_List.findByIdAndDelete(id);
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

module.exports = WizardListController;
