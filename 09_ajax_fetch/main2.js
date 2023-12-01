// syntax
// fetch("https://reqres.in/api/users")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (body) {
//     console.log(body);
//   });

const getAllUsers = () => {
  fetch("https://reqres.in/api/users")
    .then(function (response) {
      return response.json();
    })
    .then(function (body) {
      console.log(body);
    });
};

const createUser = (body) => {
  fetch(`https://reqres.in/api/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (body) {
      console.log(body);
    });
};

createUser({ name: "Ali", job: "Software Engineer" });
