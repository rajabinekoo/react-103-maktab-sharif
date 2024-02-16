"use server";

import PocketBase from "pocketbase";

// server action is here!
export const getUserByCredentials = async (
  username: string,
  password: string
) => {
  const url = process.env.pocketbaseUrl;
  const client = new PocketBase(url);
  try {
    await client.admins.authWithPassword(
      process.env.pocketbaseUsername as string,
      process.env.pocketbasePassword as string
    );
    const record: IUser = await client
      .collection("users")
      .getFirstListItem(`username="${username}"`);
    if (!record || record.password !== password) {
      return { error: "User not found" };
    }
    return { message: "ok" };
  } catch (_) {
    return { error: "User not found" };
  }
};
