import express from "express";
const router = express.Router();
import CryptoJS from "crypto-js";
import connection from "../lib/conn";
import { RowDataPacket } from "mysql2";

interface IUser extends RowDataPacket {
    username: string;
    password: string;
}

// Sign up

router.post("/add", (req, res) => {
    let username = req.body.username;
    let encryptedPassword = CryptoJS.AES.encrypt(
        req.body.password as string,
        process.env.SALT_KEY as string
    ).toString();

    connection.connect((err) => {
        if (err) console.log("Error: ", err);

        let query = "INSERT into user (username, password) VALUES (?, ?)";
        let values = [username, encryptedPassword];

        connection.query<IUser[]>(query, values, (err, data) => {
            if (err) {
                console.log("Error", err);
                return res
                    .status(409)
                    .json({ message: "Username already exists." });
            }
            data.forEach((user) => {
                console.log("User Saved", user.username);
                res.json({ userid: user.insertId });
            });
        });
    });
});

// Sign in

router.post("/signin", (req, res) => {
    connection.connect((err) => {
        if (err) console.log("Error: ", err);

        let query = "SELECT * FROM user WHERE username = ?";
        let values = [req.body.username];

        connection.query<IUser[]>(query, values, (err, data) => {
            if (err) console.log("Error: ", err);

            if (data.length > 0) {
                let user = data[0];
                let decryptedPassword = CryptoJS.AES.decrypt(
                    user.password as string,
                    process.env.SALT_KEY as string
                ).toString(CryptoJS.enc.Utf8);

                if (decryptedPassword === req.body.password) {
                    const { password, ...userWithoutPassword } = user;
                    res.json(userWithoutPassword);
                } else {
                    res.status(401).json({
                        message: "Sorry, you can't come in.",
                    }); // Wrong password
                }
            } else {
                res.status(401).json({ message: "Sorry, you can't come in." }); // Wrong username
            }
        });
    });
});

export default router;
