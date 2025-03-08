import { Schema, model } from "mongoose";

const blogSchema = new Schema(
  {
    title: { type: String, required: true },
    thumbUrl: { type: String, required: true },
    date: { type: String, required: true },
    btnText: { type: String, default: "Learn More" },
    href: { type: String, required: true },
    socialShare: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

const Blog = model("Blog", blogSchema, "blogs");

export default Blog;
