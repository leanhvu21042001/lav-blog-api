import express from "express";
import postDto from "./post.dto";
import PostController from "./post.controller";
import validateDto from "@/middleware/validate-dto";

const router = express.Router();

router
  .use("post")
  .get("/", PostController.getAll)
  .get("/:id", PostController.getOne)
  .post("/", validateDto(postDto.createPostDto), PostController.createPost);

export default router;
