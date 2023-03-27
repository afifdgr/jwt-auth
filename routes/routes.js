import express from "express";
import { refreshToken } from "../controllers/RefreshToken.js";
import {
  getUsers,
  login,
  logout,
  register,
} from "../controllers/UsersController.js";
import { verifyToken } from "../middleware/VerifyToken.js";

const router = express.Router();

router.get("/users", verifyToken, getUsers);
router.post("/users", register);
router.post("/login", login);
router.get("/token", refreshToken);
router.delete("/logout", logout);

export default router;
