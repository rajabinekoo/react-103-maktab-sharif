import { fetchUserInfo } from "../../libs/userInfo";
const usernamePara = document.getElementById("tasksHeaderUsername");

async function main() {
  const user = await fetchUserInfo();
  if (!user) return;
  usernamePara.innerText = user.username;
}

main();
