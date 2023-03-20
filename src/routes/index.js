import express from "express";
import post from "./post";

const router = express.Router();

router.get("/", (_req, res) => res.json({ message: "App is running" }));
router.get("/test", (_req, res) => res.json({ message: "Test" }));
router.use("/post", post);

export default router;
