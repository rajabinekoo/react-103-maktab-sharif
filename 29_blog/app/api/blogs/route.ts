import { Blog } from "@/database/models/blog";
import { NextRequest } from "next/server";
import "../../../database/connection";
import { writeFile } from "fs/promises";

export const dynamic = "force-dynamic";

export async function GET() {
  const list = await Blog.find();
  return Response.json({ list });
}

export async function POST(request: NextRequest) {
  const data = await request.formData();
  const file = <File>data.get("banner");

  if (!file) {
    return Response.json({ message: "Banner required" }, { status: 400 });
  }
  if (!file.type.includes("image")) {
    return Response.json({ message: "Invalid banner" }, { status: 400 });
  }
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const body = {
    title: <string>data.get("title"),
    tag: <string>data.get("tag"),
    body: <string>data.get("body"),
  };

  if (!body.title?.trim?.()) {
    return Response.json({ message: "Invalid title" }, { status: 400 });
  }
  if (!body.tag?.trim?.()) {
    return Response.json({ message: "Invalid tag" }, { status: 400 });
  }
  if (!body.body?.trim?.()) {
    return Response.json({ message: "Invalid body" }, { status: 400 });
  }

  const fileFormat = file.type.split("/")[1];

  const filePath = `/images/${crypto.randomUUID()}.${fileFormat}`;
  const fileDist = `public${filePath}`;
  await writeFile(fileDist, buffer);

  const newBlog = await Blog.create({
    title: data.get("title"),
    tag: data.get("tag"),
    body: data.get("body"),
    banner: filePath,
  });

  return Response.json({ data: newBlog });
}
