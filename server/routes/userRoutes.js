import express from "npm:express@^4.18";
const router = express.Router();
import {
  login,
  logout,
  verifyOtp,
  updatePassword,
  register,
  userInfo,
} from "../controllers/auth.js";

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/send-otp", verifyOtp);
router.patch("/updatePwd/:id", updatePassword);
router.get("/userInfo/:id", userInfo);

export default router;
