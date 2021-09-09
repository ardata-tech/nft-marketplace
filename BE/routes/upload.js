import { upload, getImage } from "../controllers/upload.js";
import express from "express";
import auth from '../middleware/auth.js';
const router = express.Router();

router.post('/', auth, upload);
router.get('/get', getImage);

export default router;