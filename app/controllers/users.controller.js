import { pool } from "../config/database/db";
import message from "../config/message";

export const createUser = async(req, res) => {
    try {
        const name = req.body.name;
        const result = await pool.query(`INSERT INTO users(name) VALUES 
        ('${name}')`);
        res.json(result);

    } catch (error) {
        message(error.message, "danger");
        res.status(500);
    }
}