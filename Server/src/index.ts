import express, { Express } from "express";
import session from "express-session";
import passport from "passport";
import { configDotenv } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import { authRouter } from "./routes/authRouter";
import { userRouter } from "./routes/usersRouter";
import { cartRouter } from "./routes/cartRouter";
import { paymentRouter } from "./routes/paymentRouter";

configDotenv();

const app: Express = express();

app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST"],
  })
);
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: true,
      maxAge: 1000 * 60 * 20,
      sameSite: "none",
      path: "/",
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/cart", cartRouter);
app.use("/payment", paymentRouter);

app.listen("8000", () => {
  console.log("server running on TS at port 8000");
});
