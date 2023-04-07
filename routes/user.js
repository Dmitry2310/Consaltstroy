import express from "express";
import { signIn, signUp } from "../controllers/user.js";

const router = express.Router();

router.post('/signin', /* auth, */ signIn);
router.post('/signup', /* auth, */ signUp);

export default router;