import httpStatusCodes from "http-status-codes";
import { handleError } from "../middleware/error_handler";

import PostService from "../services/post";

class PostController {
  async createPost(req, res) {
    try {
      const id = await PostService.createPost(req.body);
      return res.status(httpStatusCodes.CREATED).json({
        data: id,
      });
    } catch (error) {
      handleError(error);
    }
  }

  async getAll(_req, res) {
    try {
      const posts = await PostService.getAll();
      return res.status(httpStatusCodes.OK).json({
        data: posts,
      });
    } catch (error) {
      handleError(error);
    }
  }
}

export default new PostController();
