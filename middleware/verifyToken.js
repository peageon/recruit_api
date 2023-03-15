const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!(authHeader && authHeader.startsWith('Bearer'))) {
        return res.status(401).json({
            message: 'Invalid token',
        });
    }
    try {
        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        return next();
    } catch(error) {
        if (error === 'TokenExpiredError') {
            return res.status(401).json({
                message: 'Token expired',
            });
        }
        return res.status(401).json({
            message: 'Invalid token',
        });
    }
};

module.exports = verifyToken;