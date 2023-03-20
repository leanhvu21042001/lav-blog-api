import express from "express";
import PostController from "../controllers/post";

const router = express.Router();

/* GET users listing. */
router.get("/get-all", PostController.getAll);
router.post("/create", PostController.createPost);

export default router;
