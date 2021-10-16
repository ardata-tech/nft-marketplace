import express from 'express';
import singup from '../controllers/singup.js';

const router = express.Router();

router.post('/', singup);

export default router;