import express from "express";
import PostController from "../controllers/post";
import validateDto from "../middleware/validate-dto";
import postDto from "../dto/post";

const router = express.Router();

router.get("/get-all", PostController.getAll);
router.get("/:id", PostController.getOne);
router.post(
  "/create",
  validateDto(postDto.createPostDto),
  PostController.createPost
);

export default router;
