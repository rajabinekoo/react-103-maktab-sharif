// ========================================================================
// ==== json ====

// const user = {
//   id: 1,
//   username: "rajabinekoo",
//   email: "ali.rajabinekoo@gmail.com",
// };

// const userString = JSON.stringify(user);
// console.log(userString);
// console.log(typeof userString);

// const duplicatedUser = JSON.parse(userString);
// console.log(JSON.stringify(duplicatedUser) === JSON.stringify(user));

// ========================================================================
// ==== xhr -> xml http request ====

// 110ms
function getUsersAsync(funcId) {
  const url = "https://reqres.in/api/users";
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(funcId, JSON.parse(xhttp.responseText).data);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

// 270ms
function getUsersSync(funcId) {
  const url = "https://reqres.in/api/users";
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", url, false);
  xhttp.send();
  console.log(funcId, JSON.parse(xhttp.responseText).data);
}

for (let funcId = 0; funcId < 90; funcId++) {
  getUsersAsync(funcId);
}
