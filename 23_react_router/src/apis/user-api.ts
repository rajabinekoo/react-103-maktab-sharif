export interface IShortUser {
  id: number;
  username: string;
}
export interface IUser extends IShortUser {
  userId: number;
  firstName: string;
  lastName: string;
  image: string;
}
type fetchUserByIdFuncType = (_: number) => Promise<IUser>;

export const fetchUserById: fetchUserByIdFuncType = async (id: number) => {
  const response = await fetch(`https://dummyjson.com/users/${id}`);
  const data = await response.json();
  return data;
};
