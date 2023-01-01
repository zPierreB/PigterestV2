import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import path from 'path';
import session from 'express-session';
import { fileURLToPath } from 'url';

import routerIndex from './routes/index.routes.js';

const app = express();

// Session
const oneDay = 1000 * 60 * 60 * 3; // The duration of the session is for 3 hours.
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: oneDay,
        secure: true
    }
}));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

//we need to change up how __dirname is used for ES6 purposes
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, 'views')));

app.use('/', routerIndex);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is successfully running!`);
});