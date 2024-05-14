import express from "express";
const router=express.Router();
import {homescreen,loginscreen,registerscreen} from "../controllers/page.js"
router.route("/home").get(homescreen)
router.route("/login").get(loginscreen)
router.route("/register").get(registerscreen)

export default router;