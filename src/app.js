import express from "express";
import path from "path";
import logger from "morgan";
import cookieParser from "cookie-parser";

import debug from "debug";
import http from "http";

import rootRouter from "./routes";
import { notFound, internalServerError } from "./middleware/error_handler";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", rootRouter);

// catch 404 and forward to error handler
app.use(notFound);

// error handler
app.use(internalServerError);

export default app;
