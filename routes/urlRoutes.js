import express from "express";

import {
    shortenUrl,
    redirectUrl
} from "../controllers/urlController.js";

import { requireAuth } from "../middleware/authMiddleware.js";

const router = express.Router();


// URL Shortener page
router.get("/", requireAuth, (req, res) => {
    res.render("index", {
        user: req.session.user
    });
});


// Create short URL
router.post("/shorten", requireAuth, shortenUrl);


// Redirect short URL
router.get("/:shortCode", redirectUrl);


export default router;