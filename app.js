import express from "express";
import dotenv from "dotenv";
import session from "express-session";

import "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import urlRoutes from "./routes/urlRoutes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;


// ================= MIDDLEWARE =================

app.use(express.urlencoded({ extended: true }));

app.use(express.json());


// ================= SESSION =================

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false
    })
);


// ================= EJS =================

app.set("view engine", "ejs");

// ================= STATIC FILES =================

app.use(express.static("public"));

// ================= AUTH ROUTES =================

app.use("/", authRoutes);

// ================= URL ROUTES =================

app.use("/", urlRoutes);

// ================= SERVER =================

app.listen(PORT, () => {

    console.log(
        `Server running at http://localhost:${PORT}`
    );

});