const cloudinary = require('cloudinary').v2;
const fs = require('fs');
require('dotenv').config();

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});


const uploadOnCloudinary = async (filePath) => {
    try {
        if (!filePath) return null;
    
        const response = await cloudinary.uploader.upload(filePath, { resource_type: "auto" });
        console.log("File uploaded on Cloudinary:", response.secure_url);
        
        // Delete the local file after uploading
        fs.unlinkSync(filePath);

        return { secure_url: response.secure_url };
    } catch (error) {
        console.error("Cloudinary Upload Error:", error);
        
        // Delete the file if upload fails
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }

        return null;
    }
};

module.exports = { uploadOnCloudinary };
