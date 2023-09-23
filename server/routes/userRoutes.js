import express from "express";
const router = express.Router();
import {
  login,
  logout,
  updatePassword,
  register,
  userInfo,
  deleteUser,
} from "../controllers/Auth.js";

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.patch("/updatePwd/:id", updatePassword);
router.get("/userInfo/:id", userInfo);
router.patch("/delete/:id", deleteUser);

export default router;
