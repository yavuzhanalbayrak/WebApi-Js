import blogRepository from "../repositories/blogRepository.js";
const mapBlog = ({
  _id,
  title,
  thumbUrl,
  date,
  btnText,
  href,
  socialShare,
}) => ({
  _id,
  title,
  thumbUrl,
  date,
  btnText,
  href,
  socialShare,
});

export async function healthCheck() {
  let blog = await blogRepository.getAllBlogs();

  return { blog: blog.map(mapBlog) };
}
