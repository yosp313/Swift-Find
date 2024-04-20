import { Request, Response, Router } from "express";
import passport from "passport";

const passportConfig = require("../config/passport");
export const authRouter = Router();

authRouter.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    session: true,
  })
);

authRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000/products",
    failureRedirect: "http://localhost:3000",
    passReqToCallback: true,
  })
);
