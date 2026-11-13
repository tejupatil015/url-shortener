import bcrypt from "bcrypt";

import {
    findUserByEmail,
    createUser
} from "../models/userModel.js";


// ================= REGISTER PAGE =================

export const showRegister = (req, res) => {
    res.render("register");
};


// ================= REGISTER USER =================

export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).send("All fields are required");
        }

        // Check existing account
        const existingUser = await findUserByEmail(email);

        if (existingUser) {
            return res.redirect("/login");
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const result = await createUser(
            name,
            email,
            hashedPassword
        );

        // Auto login after registration
        req.session.user = {
            id: result.insertId,
            name: name,
            email: email
        };

        // Go to URL Shortener
        res.redirect("/");

    } catch (error) {
        console.log(error);
        res.status(500).send("Something went wrong");
    }
};


// ================= LOGIN PAGE =================

export const showLogin = (req, res) => {
    res.render("login");
};


// ================= LOGIN USER =================

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).send("Email and password are required");
        }

        // Find user
        const user = await findUserByEmail(email);

        if (!user) {
            return res.status(401).send("Account not found");
        }

        // Compare password
        const passwordMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!passwordMatch) {
            return res.status(401).send("Invalid password");
        }

        // Create session
        req.session.user = {
            id: user.id,
            name: user.name,
            email: user.email
        };

        // Go to URL Shortener
        res.redirect("/");

    } catch (error) {
        console.log(error);
        res.status(500).send("Something went wrong");
    }
};


// ================= LOGOUT =================

export const logoutUser = (req, res) => {

    req.session.destroy((error) => {

        if (error) {
            console.log(error);
            return res.status(500).send("Logout failed");
        }

        res.redirect("/login");
    });
};