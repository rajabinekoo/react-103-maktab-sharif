"use server";

import { cookies } from "next/headers";
import PocketBase from "pocketbase";
import moment from "moment";

const sessionKey = process.env.sessionCookieKey as string;
const url = process.env.pocketbaseUrl;
const perPage = 10;

const getClient = async (): Promise<PocketBase> => {
  const client = new PocketBase(url);
  await client.admins.authWithPassword(
    process.env.pocketbaseUsername as string,
    process.env.pocketbasePassword as string
  );
  return client;
};

type authorizationFuncType = () => Promise<IInternalApiResponse<IUser>>;
export const authorization: authorizationFuncType = async () => {
  const token = cookies().get(sessionKey);
  const client = await getClient();
  try {
    const session: IToken = await client
      .collection("tokens")
      .getFirstListItem(`sessionKey="${token?.value}"`);

    const expired = moment(session.created)
      .add(session.expiration, "seconds")
      .isBefore(moment());
    if (expired) {
      await client.collection("tokens").delete(session.id);
      return { error: "Forbidden access" };
    }

    return { data: await client.collection("users").getOne(session.userId) };
  } catch (_) {
    return { error: "Forbidden access" };
  }
};

export const getAllUsers = async (
  page = 1
): Promise<PocketbaseResponse<IUser>> => {
  const client = await getClient();
  return await client.collection("users").getList(page, perPage);
};

export const deleteUsers = async (userId: string): Promise<void> => {
  const client = await getClient();
  await client.collection("users").delete(userId);
};

export const getUserByCredentials = async (
  username: string,
  password: string
): Promise<IInternalApiResponse<boolean>> => {
  const client = await getClient();
  try {
    const user: IUser = await client
      .collection("users")
      .getFirstListItem(`username="${username}"`);
    if (!user || user.password !== password) {
      return { error: "User not found" };
    }

    try {
      const sessions: IToken[] = await client.collection("tokens").getFullList({
        sort: "-created",
        filter: `userId="${user.id}"`,
      });
      for (const s of sessions) {
        // s.created + s.expiration < today
        const expired = moment(s.created)
          .add(s.expiration, "seconds")
          .isBefore(moment());
        if (expired) {
          await client.collection("tokens").delete(s.id);
        }
      }
    } catch (_) {}

    const data = {
      userId: user.id,
      sessionKey: crypto.randomUUID(),
      expiration: Number(process.env.expirationTime),
    };
    await client.collection("tokens").create(data);
    cookies().set(sessionKey, data.sessionKey);

    return { data: user.isAdmin };
  } catch (_) {
    return { error: "User not found" };
  }
};
