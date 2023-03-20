import db from "../db/knex";

class PostDAO {
  async createPost(title, content, tags, slug) {
    const [id] = await db("posts")
      .insert({
        title,
        content,
        tags,
        slug,
      })
      .returning("id");

    return id;
  }

  async getAll() {
    const posts = await db("posts").select("*");
    return posts;
  }
}

export default new PostDAO();
