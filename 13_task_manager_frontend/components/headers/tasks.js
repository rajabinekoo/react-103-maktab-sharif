import { fetchUserInfo } from "../../libs/userInfo";
const usernamePara = document.getElementById("tasksHeaderUsername");

document
  .getElementById("logoutBtn")
  .addEventListener("click", async function () {
    window.sessionStorage.removeItem("token");
    window.location.href = "/login";
  });

async function main() {
  const user = await fetchUserInfo();
  if (!user) return;
  usernamePara.innerHTML = `<a href="/profile">${user.username}</a>`;
}

main();
