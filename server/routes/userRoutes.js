import express from "express";
const router = express.Router();
import { login, logout, verifyOtp } from "../controllers/auth.js";

router.post("/login", login);
router.post("/logout", logout);
router.post("/send-otp", verifyOtp);

export default router;
