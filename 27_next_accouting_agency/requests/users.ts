"use client";

import axios from "axios";

export const removeUser = async (userId: string) => {
  await axios.delete(`/api/users?userId=${userId}`);
};
