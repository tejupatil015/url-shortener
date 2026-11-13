import db from "../config/db.js";

export const createShortUrl = async (originalUrl, shortCode) => {

    const [result] = await db.execute(
        `INSERT INTO urls (original_url, short_code)
         VALUES (?, ?)`,
        [originalUrl, shortCode]
    );

    return result;
};


export const getUrlByShortCode = async (shortCode) => {

    const [rows] = await db.execute(
        `SELECT * FROM urls WHERE short_code = ?`,
        [shortCode]
    );

    return rows[0];
};


export const increaseClicks = async (shortCode) => {

    await db.execute(
        `UPDATE urls
         SET clicks = clicks + 1
         WHERE short_code = ?`,
        [shortCode]
    );
};