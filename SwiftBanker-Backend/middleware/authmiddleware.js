const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    console.log("❌ Missing or invalid auth header");
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("JWT_SECRET in middleware:", process.env.JWT_SECRET);
    console.log("Decoded token:", decoded);
    req.userId = decoded.userId;
    console.log("✅ Token verified. userId:", req.userId);
    next();
  } catch (err) {
    console.error("❌ Token verification failed:", err.message);
    return res.status(403).json({ message: "Forbidden" });
  }
};

module.exports = authMiddleware;
