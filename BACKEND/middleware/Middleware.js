
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "my_jwt_secret_key";

const authenticateToken = (req, res, next) => {

    try {
        const authHeader = req.headers['authorization'];
        if (!authHeader) {
            return res.status(401).json({ message: "Authorization header missing" });
        }
        const token = authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: "Token missing" });
        }

        const payload = jwt.verify(token, JWT_SECRET);
        if (!payload) {
            return res.status(401).json({ message: "Invalid token" });
        }
        req.user = payload;
        next();
    }
    catch (err) {
        console.error(err);
        return res.status(401).json({ message: "Invalid token" });
    }

};





const isHospital = (req, res, next) => {
    if (req.user.role !== "hospital") {
        return res.status(403).json({ message: "Access denied" });
    }
    next();
};



module.exports = {
    isHospital,
    authenticateToken
};