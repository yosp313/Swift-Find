import express, { Express } from "express";
import session from "express-session";
import passport from "passport";
import { configDotenv } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import { authRouter } from "./routes/authRouter";
import { userRouter } from "./routes/usersRouter";
import { productRouter } from "./routes/productRouter";

configDotenv();

const app: Express = express();

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000", "http://localhost:8000"],
    methods: ["GET"],
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
app.use("/products", productRouter);

app.listen("8000", () => {
  console.log("server running on TS at port 8000");
});
