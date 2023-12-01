const usersList = document.querySelector(".users-list");

const onClickCard = (id) => {
  const splittedPathname = window.location.pathname.split("/");
  window.location.href =
    splittedPathname.slice(0, splittedPathname.length - 1).join("/") +
    `/user.html?id=${id}`;
};

function Card(id = "", src = "", title = "", description = "") {
  return `
      <div class="card-wrapper" onclick="onClickCard(${id})">
        <div class="card">
          <img
            src="${src}"
            class="card-image"
          />
          <div class="card-body">
            <div class="card-title" title="${title}">
              ${title}
            </div>
            <div class="card-desc">${description}</div>
          </div>
        </div>
      </div>
    `;
}

function usersListRenderer() {
  let html = "";
  for (const user of users) {
    html += Card(user.id, user.avatar, user.first_name, user.email);
  }
  usersList.innerHTML = html;
}

function render() {
  usersListRenderer();
}

render();
