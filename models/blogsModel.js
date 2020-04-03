const db = require('./conn')

class blogsModel{
    constructor(id, author, blog_posts, title) {
      this.id = id;
      this.author = author;
      this.blog_posts = blog_posts;
      this.title = title;
    }

  static async getAllBlogs() {
    try {
      const response = await db.any(`SELECT * FROM blogs;`);
      return response;
    } catch (error) {
      console.error("ERROR: ", error);
      return error;
    }
  }   

  static async getCommentsById(blogs_id) {
      try {
        const response = await db.any(
          `SELECT comment FROM comments WHERE blogs_id = ${blogs_id};`
        );
        return response;
      } catch (error) {
        console.error("ERROR: ", error);
        return error;
    }
  }
}

module.exports = blogsModel;