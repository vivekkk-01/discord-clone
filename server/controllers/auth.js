const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { email, password, username } = req.body;
    const ifUserExists = await User.exists({ email });
    if (ifUserExists) {
      return res.status(409).status("User with email address already exists!");
    }
    const encryptedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      password: encryptedPassword,
      username,
    });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    return res.status(201).json({ email, username, token });
  } catch (error) {
    return res
      .status(500)
      .json("Something went wrong, please try again later!");
  }
};
