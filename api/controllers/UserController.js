const User = require("../models/User");
const { validationResult } = require("express-validator");

const addUsers = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Return validation errors with 400 status code
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "Email already exists. Please use a unique email." });
    }

    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password, // Make sure to hash passwords in production
    });

    res.status(201).json({ message: "User created successfully!", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Server error",
      message: error.message,
    });
  }
};

module.exports.addUsers = addUsers;
