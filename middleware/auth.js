const jwt = require("jsonwebtoken");
const config = require("config");
// a custom middle ware
module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header("x-auth-token");
  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    req.user = decoded.user;
    next(); // Calling next() with no arguments tells express to continue to the next matching middleware or route handler
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
