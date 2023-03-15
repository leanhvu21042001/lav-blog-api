import express from "express";
import users from "./users";

const router = express.Router();

router.get("/", (_req, res) => res.json({ message: "App is running" }));
router.use("/users", users);

export default router;
