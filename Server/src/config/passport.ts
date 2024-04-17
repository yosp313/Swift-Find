import { configDotenv } from "dotenv";
import passport from "passport";
import * as GoogleStrategy from "passport-google-oauth20";

configDotenv();

passport.use(
  new GoogleStrategy.Strategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID as string,
      callbackURL: "/auth/google/callback",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("done auth");
    }
  )
);
