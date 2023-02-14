require("dotenv").config();
const jwt = require("jsonwebtoken");

const checkJWt = async (req, res, next) => {
  const token = req.headers.token;

  if (token) {
    try {
      jwt.verify(token, process.env.KEY);
      next();
    } catch (err) {
      res.send("Invalid token");
    }
  } else {
    res.send("No token Found");
  }
};

module.exports = checkJWt;
