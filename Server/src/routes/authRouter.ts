import { Router } from "express";
import { authGetController } from "../controllers/authController";
import passport from "passport";

const passportConfig = require("../config/passport");
export const authRouter = Router();

authRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["profile"], session: true })
);

authRouter.get("/google/callback", authGetController);
