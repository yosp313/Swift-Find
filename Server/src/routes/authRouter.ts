import { configDotenv } from "dotenv";
import { Request, Response, Router } from "express";
import passport from "passport";

configDotenv();

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
  passport.authenticate("google"),
  (req: Request, res: Response) => {
    res.cookie("user", req.user, {
      maxAge: 1000 * 60 * 20,
      httpOnly: true,
      sameSite: "none",
      secure: true,
      path: "/",
    });
    res.redirect(`${process.env.CLIENT_URL}/products`);
  }
);
