import express from "express";
const router = express.Router();
import {
  login,
  logout,
  updatePassword,
  register,
  userInfo,
  deleteUser,
  refreshroute,
} from "../controllers/Auth.js";
import { verifyAccessToken, verifyRefreshToken } from "../utils/generateToken.js";

router.post("/register", register);
router.post("/login", login);
router.get('/refresh', refreshroute)
router.post("/logout", logout);
router.patch("/updatePwd/:id", verifyAccessToken, updatePassword);
router.get("/userInfo/:id", verifyAccessToken, userInfo);
router.patch("/delete/:id", verifyAccessToken, deleteUser);

export default router;
