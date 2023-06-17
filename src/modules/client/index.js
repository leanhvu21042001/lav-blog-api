import express from "express";

import postRoutes from "./post/post.routes";

const router = express.Router();

router.use("/post", postRoutes);

export default router;
