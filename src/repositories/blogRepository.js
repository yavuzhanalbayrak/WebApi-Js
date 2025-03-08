import Blog from "../models/blog.js";

class BlogRepository {
  async getAllBlogs() {
    return await Blog.find()
      .then((blogs) => {
        return blogs;
      })
      .catch((error) => {
        throw new Error("Veri çekme hatası: " + error.message);
      });
  }
}

export default new BlogRepository();
