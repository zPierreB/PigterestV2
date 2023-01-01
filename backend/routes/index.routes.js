import express from 'express';
import path from 'path';

import authRouter from './auth.routes.js';
import userRouter from './user.routes.js';

const router = express.Router();

// Simple route

router.get('/', (req, res) => {
    res.send(path.join(__dirname + '/index.html'));
})

router.use('/login', authRouter);
router.use('/user', userRouter);



export default router;