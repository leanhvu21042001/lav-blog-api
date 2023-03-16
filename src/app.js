import express from "express";
import path from "path";
import logger from "morgan";
import cookieParser from "cookie-parser";
import helmet from "helmet";

import rootRouter from "./routes";
import { notFound, internalServerError } from "./middleware/error_handler";
import cors from "./middleware/cors";
import limiter from "./middleware/limiter";

const app = express();

// Use package
app.use(helmet());

// just run when deploy. [Maybe some test case over 100 requests]
if (process.env.NODE_ENV === "production") {
  app.use(limiter);
}

// Cross Origin Resource Sharing
app.use(cors);

// Logger
app.use(logger("dev"));

// parse application/json
app.use(express.json());

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// set up for cookies middleware
app.use(cookieParser());

app.use("/public", express.static(path.join(__dirname, "./public")));

// Use router
app.use("/", rootRouter);

// catch 404 and forward to error handler
app.use(notFound);
// error handler
app.use(internalServerError);

module.exports = app;
