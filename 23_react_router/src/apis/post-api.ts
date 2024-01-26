import { IShortUser, IUser } from "./user-api";

export interface IPost {
  id: number;
  userId: number;
  title: string;
  body: string;
  tags: string[];
  reactions: number;
  user?: IUser;
}
export interface IComment {
  id: number;
  postId: number;
  body: string;
  user: IShortUser;
  userData: IUser;
}
type fetchPostsFuncType = () => Promise<IPost[]>;
type fetchPostInfoFuncType = (_: number) => Promise<IPost>;
type fetchPostCommentsFuncType = (_: number) => Promise<IComment[]>;

export const fetchPosts: fetchPostsFuncType = async () => {
  const response = await fetch("https://dummyjson.com/posts");
  if (response.status >= 400) {
    throw await response.json();
  }
  const data = await response.json();
  return data.posts;
};

export const fetchPostInfo: fetchPostInfoFuncType = async (id) => {
  const response = await fetch(`https://dummyjson.com/posts/${id}`);
  if (response.status >= 400) {
    throw await response.json();
  }
  const data = await response.json();
  return data;
};

export const fetchPostComments: fetchPostCommentsFuncType = async (id) => {
  const response = await fetch(`https://dummyjson.com/posts/${id}/comments`);
  if (response.status >= 400) {
    throw await response.json();
  }
  const data = await response.json();
  return data.comments;
};
