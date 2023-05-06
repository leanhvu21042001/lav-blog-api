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

  async getOne(id) {
    const post = await db("posts").select("*").where("id", id).first();
    return post;
  }
}

export default new PostDAO();
