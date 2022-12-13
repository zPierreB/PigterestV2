import express from 'express';
import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

import User from './models/User.js';

const app = express();

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// Simple route
app.get('/', (req, res) => {
    res.json({ message: "Welcome to Pigterest" });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is successfully running!`);
});

const user = new User();
user.login();