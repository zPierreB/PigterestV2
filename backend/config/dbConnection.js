import mysql from "mysql2";
import dotenv from 'dotenv';
dotenv.config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PSWD,
    database: process.env.DB_NAME
});

connection.connect(error => {
    if(error) throw error;
    console.log("Succesfully connected to database.");
});

export default connection;