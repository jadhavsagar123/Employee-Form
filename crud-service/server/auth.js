import express from "express";
const router = express.Router();
import {
  Login,
  Signup,
} from "../controllers/auth.controller";

router.post("/login", Login);
router.post("/signup", Signup);
module.exports = router;
