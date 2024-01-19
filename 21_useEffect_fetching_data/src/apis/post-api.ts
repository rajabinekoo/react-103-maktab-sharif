import { IUser } from "./user-api";

export interface IPost {
  id: number;
  userId: number;
  title: string;
  body: string;
  tags: string[];
  reactions: number;
  user?: IUser;
}
type fetchPostsFuncType = () => Promise<IPost[]>;

export const fetchPosts: fetchPostsFuncType = async () => {
  const response = await fetch("https://dummyjson.com/posts");
  const data = await response.json();
  return data.posts;
};
