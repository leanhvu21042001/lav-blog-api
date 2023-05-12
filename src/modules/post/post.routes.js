import validateDto from "@/middleware/validate-dto";
import express from "express";
import PostController from "./post.controller";
import postDto from "./post.dto";

const router = express.Router();

router
  .get("/", PostController.getAll)
  .get("/:id", PostController.getOne)
  .post("/", validateDto(postDto.createPostDto), PostController.createPost);

export default router;
