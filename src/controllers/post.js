import httpStatus from "http-status";

import { isEmpty } from "../utils";
import APIError from "../error/APIError";
import PostService from "../services/post";

class PostController {
  async createPost(req, res, next) {
    try {
      const id = await PostService.createPost(req.body);
      return res.status(httpStatus.CREATED).json({
        data: id,
      });
    } catch (error) {
      next(new APIError(error));
    }
  }

  async getAll(_req, res, next) {
    try {
      const posts = await PostService.getAll();
      return res.status(httpStatus.OK).json({
        data: posts,
      });
    } catch (error) {
      next(new APIError(error));
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
      next(new APIError(error));
    }
  }
}

export default new PostController();
