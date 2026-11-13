import { nanoid } from "nanoid";

import {
    createShortUrl,
    getUrlByShortCode,
    increaseClicks
} from "../models/urlModel.js";


// CREATE SHORT URL
export const shortenUrl = async (req, res) => {

    try {

        const { original_url } = req.body;

        if (!original_url) {
            return res.status(400).send("URL is required");
        }

        // Generate 6 character short code
        const shortCode = nanoid(6);

        // Save in MySQL
        await createShortUrl(original_url, shortCode);

        // Create short URL
        const shortUrl = `${req.protocol}://${req.get("host")}/${shortCode}`;

        // Render result page
        res.render("shortened", {
            originalUrl: original_url,
            shortUrl: shortUrl
        });

    } catch (error) {

        console.log(error);

        
        res.status(500).send("Something went wrong");

    }
};


// REDIRECT SHORT URL
export const redirectUrl = async (req, res) => {

    try {

        const { shortCode } = req.params;

        // Find URL
        const url = await getUrlByShortCode(shortCode);

        // If URL doesn't exist
        if (!url) {
            return res.status(404).send("Short URL not found");
        }

        // Increase click count
        await increaseClicks(shortCode);

        // Redirect
        res.redirect(url.original_url);

    } catch (error) {

        console.log(error);

        res.status(500).send("Something went wrong");

    }
};