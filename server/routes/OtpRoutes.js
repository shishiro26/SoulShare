import express from "express";
import { sendDeleteOtp, verifyOtp } from "../controllers/OTP.js";
const router = express.Router();

router.post("/verifymail", verifyOtp);
router.post("/deleteOtp/:id", sendDeleteOtp);

export default router;
