export const runtime = "nodejs";

import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    tag: String,
    body: String,
    title: String,
    banner: String,
  },
  { timestamps: true }
);

export const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);
