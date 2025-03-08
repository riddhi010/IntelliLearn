const express = require("express");
const bcrypt = require("bcryptjs"); //Hashes passwords securely
const jwt = require("jsonwebtoken"); // jsonwebtoken (JWT) → Creates authentication tokens
const User = require("../models/User");//"go up one directory" from the current file location.first go to mindbloom-backend and then in models

const router = express.Router();//It creates a new router object which you will use to define routes. These routes (like /register, /login

// User Registration (Signup)
router.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body; //The data sent in the request (in JSON format)

        // Check if user already exists
        const existingUser = await User.findOne({ email }); //checks if a user with the same email already exists i
        if (existingUser) return res.status(400).json({ message: "Email already registered!" });

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10); //The 10 is the number of salt rounds (the higher the number, the more secure but slower the hash)

        // Create a new user
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

// User Login
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "User not found!" });

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid password!" });

        // Generate JWT Token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

        //sign a new JWT.
        //user._id is the MongoDB object ID that uniquely identifies each user in the database.
        //secret key used to sign the token. It ensures the integrity of the token (i.e., no one can modify it after it’s been created).

        res.json({ token, user });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

module.exports = router;
