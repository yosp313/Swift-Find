import { configDotenv } from "dotenv";
import passport from "passport";
import * as GoogleStrategy from "passport-google-oauth20";
import { getUser, postUser } from "../services/userService";
import { User } from "./db/schema";

configDotenv();

passport.serializeUser((user, cb) => {
  process.nextTick(() => cb(null, user));
});

passport.deserializeUser(async (id: string, cb) => {
  const user = await getUser(id);
  process.nextTick(() => cb(null, user));
});

passport.use(
  new GoogleStrategy.Strategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID as string,
      callbackURL: "/auth/google/callback",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
    async (accessToken, refreshToken, profile, cb) => {
      process.nextTick(async () => {
        const currentUser = await getUser(profile.id);

        if (!currentUser[0]) {
          const user: User = {
            email: profile.emails?.[0]?.value ?? "",
            id: profile.id,
            fullName: profile.displayName,
            imageUrl: profile.photos?.[0]?.value ?? "",
          };

          await postUser(user);
          return cb(null, user);
        }

        return cb(null, currentUser);
      });
    }
  )
);
