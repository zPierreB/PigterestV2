import express from 'express';
import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World')
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is successfully running!`);
});