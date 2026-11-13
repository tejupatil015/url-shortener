import express from "express";

import {
    showRegister,
    registerUser,
    showLogin,
    loginUser,
    logoutUser
} from "../controllers/authController.js";

const router = express.Router();


// ================= REGISTER =================

router.get("/register", showRegister);

router.post("/register", registerUser);


// ================= LOGIN =================

router.get("/login", showLogin);

router.post("/login", loginUser);


// ================= LOGOUT =================

router.get("/logout", logoutUser);


export default router;