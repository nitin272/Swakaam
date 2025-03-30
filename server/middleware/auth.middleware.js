const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    console.log('Auth Middleware Triggered');
    const token = getTokenFromHeaders(req);
    // const token = req.cookies.token;
    console.log('Token:', token);
    
    if (!token) {
        return res.status(401).json({ message: 'Access Denied. No token provided.' });
    }

    try {
        const verified = jwt.verify(token, process.env.SECRET_KEY);
        req.user = verified; 
        console.log('Verified User:', req.user);
        // Attach user details to request
        next();
    } catch (error) {
        res.status(403).json({ message: 'Invalid token' });
    }
};

const getTokenFromHeaders = (req) => {
    const authHeader = req.headers['authorization'];
    console.log('Authorization Header:', authHeader.split(" ")[1]);
    
    if (authHeader && authHeader.startsWith("Bearer ")) {
        return authHeader.split(" ")[1]; // Extract the token part after "Bearer "
    }
    return null; // Return null if no token is found
};

module.exports = authMiddleware;
