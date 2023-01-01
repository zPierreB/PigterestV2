import express from 'express';
import path from 'path';

const router = express.Router();

router.get('/', (req, res) => {
    res.send(path.join(__dirname + '/user.html'));
});

export default router;