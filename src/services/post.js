import PostDao from "../dao/post";
import { toKebabCase } from "../utils";

class PostService {
  createPost(postDto) {
    const { title, content, tags } = postDto;
    const slug = toKebabCase(title);
    return PostDao.createPost(title, content, tags, slug);
  }

  getAll() {
    return PostDao.getAll();
  }
}

export default new PostService();
