import express from "express";
import auth from "../middleware/auth.js";
const router = express.Router();

import { getUser, updateUser } from "../controllers/user.js";

router.get("/:address", getUser);
router.post("/update/", auth, updateUser);

export default router;