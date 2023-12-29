import { fetchUsers2, fetchUsersResponse } from "./userFetcher";

async function main() {
  const users: fetchUsersResponse = await fetchUsers2();
  console.log(users.data[0].email);
}

main();
