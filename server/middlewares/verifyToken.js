const jwt = require("jsonwebtoken");
const User = require("../models/User");

const verifyToken = (req, res, next) => {
  let token = req.headers.authorization;
  try {
    if (!token) return res.status(401).json("You are not authorized!");
    token = token.split(" ");
    if (!token) return res.status(401).json("You are not authorized!");
    jwt.verify(token, process.env.JWT_SECRET, async (err, tokenData) => {
      if (err) return res.status(401).json("Authentication Failed!");
      req.user = await User.findById(tokenData.id);
      next();
    });
  } catch (error) {
    const err = error?.response
      ? error.response
      : error.response?.data
      ? error.response.data
      : error?.data
      ? error.data
      : "Something went wrong, please try again!";
    const errorStatus = error?.status
      ? error.status
      : error?.http_status
      ? error.http_status
      : error?.http_code
      ? error.http_code
      : 500;
    return res.status(errorStatus).json(err);
  }
};

module.exports = verifyToken;
