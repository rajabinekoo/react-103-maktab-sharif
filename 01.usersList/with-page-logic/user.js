const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get("id");
if (!userId) {
  backToHome();
}
const user = users.find((el) => Number(el.id) === Number(userId));
if (!user) {
  backToHome();
}
const root = document.getElementById("root");

function backToHome() {
  window.location.href = "index.html";
}

function UserInformation(user) {
  let information = "";
  for (const keyProp in user) {
    if (keyProp === "avatar") continue;
    information += `<p>${keyProp}: ${user[keyProp]}</p>`;
  }

  return `<div class="information-card-wrapper">
      <div class="information-card">
        <img
          src="${user.avatar}"
          class="information-card-image"
        />
        <div class="information-card-body">
          ${information}
        </div>
      </div>
      <a href="index.html">Back to home</a>
    </div>`;
}

function render() {
  root.innerHTML = UserInformation(user);
}

render();
