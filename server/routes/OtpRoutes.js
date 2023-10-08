import express from "express";
import { resendOtp, sendDeleteOtp, verifyOtp } from "../controllers/OTP.js";
const router = express.Router();

router.post("/verifymail", verifyOtp);
router.post("/deleteOtp/:id", sendDeleteOtp);
router.post('/resend/:id', resendOtp)

export default router;
