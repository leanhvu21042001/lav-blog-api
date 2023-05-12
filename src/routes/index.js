import express from "express";

import postRoutes from "@/modules/post/post.routes";

const router = express.Router();

router.get("/", (_req, res) => res.json({ message: "App is running" }));
router.use("/post", postRoutes);

export default router;
