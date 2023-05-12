import httpStatus from "http-status";

import PostService from "./post.service";
import { isEmpty } from "@/utils";
import APIError from "@/error/APIError";

class PostController {
  async createPost(req, res, next) {
    try {
      const id = await PostService.createPost(req.body);
      return res.status(httpStatus.CREATED).json({
        data: id,
      });
    } catch (error) {
      next(error);
    }
  }

  async getAll(_req, res, next) {
    try {
      const posts = await PostService.getAll();
      return res.status(httpStatus.OK).json({
        data: posts,
      });
    } catch (error) {
      next(error);
    }
  }

  async getOne(req, res, next) {
    try {
      const post = await PostService.getOne(req.params.id);

      if (isEmpty(post)) {
        return next(
          APIError.NotFound({
            message: "Post not found",
          })
        );
      }

      return res.status(httpStatus.OK).json({
        data: post,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new PostController();
