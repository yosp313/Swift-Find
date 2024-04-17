import express, { Express } from "express";
import session from "express-session";
import passport from "passport";
import { configDotenv } from "dotenv";

import { authRouter } from "./routes/authRouter";
import { userRouter } from "./routes/usersRouter";
import { productRouter } from "./routes/productRouter";

configDotenv();

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true },
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
