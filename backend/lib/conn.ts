import mysql from "mysql2";

const connection = mysql.createConnection({
    host: process.env.MYSQLHOST,
    port: process.env.MYSQLPORT
        ? parseInt(process.env.MYSQLPORT as string)
        : undefined,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
});

export default connection;
