// // call by reference variables (non-primitive) - Data Structure
// let user1 = {
//   id: 1,
//   email: "george.bluth@reqres.in",
//   first_name: "George",
//   last_name: "Bluth",
//   avatar: "https://reqres.in/img/faces/1-image.jpg",
// };
// let user2 = user1;
// user2.first_name = "Hassan";

// // call by value variables (primitive) - left hand side role
// let num1 = 2;
// let num2 = num1;
// num2 = 3;

// ============================= source code =============================

let root = document.getElementById("root");
let userState = null;

function onClickHandler(id) {
  let user = users.find((el) => Number(el.id) === Number(id));
  if (!user) {
    alert("User not found");
    return;
  }
  userState = user;
  empty();
  renderInformation();
}

function backToList() {
  empty();
  renderList();
}

function UsersListContainer(children) {
  return `<div class="users-list-container">${children}</div>`;
}

function InformationContainer(children) {
  return `<div class="information-container">${children}</div>`;
}

function Card(id, avatar, title, desc) {
  return `
    <div class="card" >
      <img class="card-image" src="${avatar}" />
      <div class="card-body">
        <p
          class="card-title cursor-pointer"
          title="${title}"
          onclick="onClickHandler(${id})"
        >
          ${title}
        </p>
        <p class="card-desc">
          ${desc}
        </p>
      </div>
    </div>
    `;
}

function InformationCard(user) {
  return `
    <div class="information-card">
      <img
        class="information-card-image"
        src="${user.avatar}"
      />
      <div class="information-card-body">
        <div>
          <p>ID: ${user.id}</p>
          <p>Firstname: ${user.first_name}</p>
          <p>Lastname: ${user.last_name}</p>
          <p>Email: ${user.email}</p>  
        </div>
        <p class="cursor-pointer" onclick="backToList()">Back to users list</p>
      </div>
    </div>
    `;
}

function renderList() {
  let htmlTags = "";
  for (const user of users) {
    htmlTags += Card(
      user.id,
      user.avatar,
      `${user.first_name} ${user.last_name}`,
      user.email
    );
  }
  root.innerHTML = UsersListContainer(htmlTags);
}

function renderInformation() {
  root.innerHTML = InformationContainer(InformationCard(userState));
}

function empty() {
  root.innerHTML = "";
}

renderList();
