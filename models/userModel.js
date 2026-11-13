import db from "../config/db.js";


// Find user by email
export const findUserByEmail = async (email) => {

    const [rows] = await db.execute(
        `SELECT * FROM users WHERE email = ?`,
        [email]
    );

    return rows[0];
};


// Create new user
export const createUser = async (name, email, password) => {

    const [result] = await db.execute(
        `INSERT INTO users (name, email, password)
         VALUES (?, ?, ?)`,
        [name, email, password]
    );

    return result;
};