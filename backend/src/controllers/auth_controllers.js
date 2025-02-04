import bcrypt from "bcryptjs";

import User from "../models/user_model.js";
import generateToken from "../utils/token.js";

export const signup = async (res, req) => {
    try {

        const { name, username, email, password, confirmPassword } = req.body;

        if (!name || !username || !email || !password || !confirmPassword) {
            return res.status(400).json({ message: "Please fill in all fields" });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }

        const existingUser = await User.findOne({ username });

        if (existingUser) {
            return res.status(400).json({ message: "Username already exists" });
        }

        existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "Email already exists" });
        }

        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters" });
        }

        const hashedPassword = await bcrypt.hash(password, 16);

        const newUser = new User ({
            name,
            username,
            email,
            password: hashedPassword
        });

        if (newUser) {
            generateToken(newUser._id, res);
            await newUser.save();
            res.status(201).json({
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                username: newUser.username
            });
        } else {
            res.status(400).json({ message: "Invalid user data" });
        }
        
    } catch (error) {
        res.status(500).json({ message: error.json });
    }
};

export const login = async (res, req) => {
    try {
        
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: "Please fill in all fields" });
        }

        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters" });
        }

        const user = await User.findOne({ username });

        if (!user) {
            return res.status(400).json ({message: "Invalid Input"});
        }

        const passwordFound = await bcrypt.compare(password, user?.password || "");

        if (!passwordFound) {
            return res.status(400).json ({message: "Invalid Input"});
        }

        generateToken(user._id, res);

        res.status(200).json({
            _id: user._id,
            name: user.name,
            username: user.username
        });

    } catch (error) {
        res.status(500).json({ message: error.json });
    }
};

export const logout = (res, req) => {
    try {
        
        res.cookie("jwt", "", {
            maxAge: 0,
        });

        res.status(200).json({ message: "Logged Out" });

    } catch (error) {
        res.status(500).json({ message: error.json });
    }
};