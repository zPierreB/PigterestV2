import express from 'express';
import path from 'path';
import UserController from '../controllers/authentification.js';

const router = express.Router();

// route to show login page
router.get('/', (req, res) => {
    res.send(path.join(__dirname + '/login.html'));
});

// Post the data to /login
router.post('/', UserController.login);

export default router;