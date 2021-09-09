import { getMeta, postMeta, getOwner, getTokenInfo, getMany } from '../controllers/meta.js';
import express from "express";
import auth from '../middleware/auth.js';
const router = express.Router();

router.get('/:tokenID', getMeta);
router.post('/', auth, postMeta);
router.get('/owner/:tokenID', getOwner);
router.get('/token/:tokenID', getTokenInfo);
router.post('/many/', getMany);

export default router;