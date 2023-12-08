// Switch from callback pattern to promise pattern for avoding callback hell
// Promise mechanism -> 1.pending 2.fulfilled 3.rejected
// Async Await pattern - try catch

// *******************************************
// Promise
// *******************************************

// general promise function -> fetch

// ************ Promise Hell ************
// let users = [];
// let a = fetch("https://reqres.in/api/users?page=1");
// a.then((response) => {
//   let b = response.json();
//   b.then((body) => {
//     users = [...body.data];
//     let a2 = fetch("https://reqres.in/api/users?page=2");
//     a2.then((response) => {
//       let b2 = response.json();
//       b2.then((body2) => {
//         users = [...users, ...body2.data];
//         logUsers();
//       });
//     });
//   });
// });
// function logUsers() {
//   console.log(users);
// }

// format2 -> Promise Hell
// let users = [];
// fetch("https://reqres.in/api/users?page=1").then((response) => {
//   response.json().then((body) => {
//     users = [...body.data];
//     fetch("https://reqres.in/api/users?page=2").then((response) => {
//       response.json().then((body2) => {
//         users = [...users, ...body2.data];
//         logUsers();
//       });
//     });
//   });
// });
// function logUsers() {
//   console.log(users);
// }

// ************ Promise Chain ************
// let users = [];
// fetch("https://reqres.in/api/users?page=1")
//   .then((response) => {
//     return response.json();
//   })
//   .then((body) => {
//     users = [...body.data];
//     return fetch("https://reqres.in/api/users?page=2");
//   })
//   .then((response) => {
//     return response.json();
//   })
//   .then((body) => {
//     users = [...users, ...body.data];
//     logUsers();
//   });

// function logUsers() {
//   console.log(users);
// }

// ************ Promisify ************

// problem ->
// setTimeout(() => {
//   console.log("log1");
//   setTimeout(() => {
//     console.log("log2");
//     setTimeout(() => {
//       console.log("log3");
//       setTimeout(() => {
//         console.log("log4");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// promise ->
// const setTimeoutPromise = (timeout = 0) => {
//   return new Promise((resolve, reject) => {
//     if (timeout >= 5000) {
//       reject("Is too long");
//     } else if (timeout < 0) {
//       reject("Timeout must be positive");
//     } else {
//       setTimeout(() => {
//         resolve(timeout);
//       }, timeout);
//     }
//   });
// };

// setTimeoutPromise(1000)
//   .then((t) => {
//     console.log("log1 with time:", t);
//     return setTimeoutPromise(3000);
//   })
//   .then((t) => {
//     console.log("log2 with time:", t);
//     return setTimeoutPromise(2000);
//   })
//   .then((t) => {
//     console.log("log3 with time:", t);
//     return setTimeoutPromise(5000);
//   })
//   .then((t) => {
//     console.log("log4 with time:", t);
//   })
//   .catch((err) => {
//     alert(err);
//   })
//   .finally(() => {
//     console.log("Done");
//   });

// error ->
// setTimeoutPromise(2000)
//   .then((t) => {
//     console.log("log with time:", t);
//   })
//   .catch((err) => {
//     alert(err);
//   });

// *******************************************
// Async/Await Try/Catch
// *******************************************

// const asyncBoundry2 = async () => {};
// const asyncBoundry3 = async function () {};

// async function asyncBoundry() {
//   try {
//     const t1 = await setTimeoutPromise(1000);
//     console.log("log1 with time:", t1);
//     const t2 = await setTimeoutPromise(6000);
//     console.log("log2 with time:", t2);
//     const t3 = await setTimeoutPromise(2000);
//     console.log("log3 with time:", t3);
//     const t4 = await setTimeoutPromise(5000);
//     console.log("log4 with time:", t4);
//   } catch (error) {
//     alert(error);
//   }
// }

// asyncBoundry();

// ************ Fetching users with async await pattern ************

// async function fetchUsers() {
//   let users = [];
//   const response = await fetch("https://reqres.in/api/users?page=1");
//   const result = await response.json();
//   users = [...result.data];
//   for (let page = 2; page <= result.total_pages; page++) {
//     const response = await fetch(`https://reqres.in/api/users?page=${page}`);
//     const result = await response.json();
//     users = [...users, ...result.data];
//   }
//   return users;
// }

// fetchUsers()
//   .then((users) => {
//     console.log(users);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// ************ Try Catch , Throw ************

// try {
//   console.log("salam");
//   throw new Error("be error khordim :((((");
//   console.log("khodafez");
// } catch (a) {
//   console.log(a.message);
// }

async function reqresRequestClient(url) {
  if (!url.includes("reqres.in")) {
    throw new Error("Invalid url");
  }
  const response = await fetch(url);
  const result = await response.json();
  return result;
}

// async function main() {
//   try {
//     const result = await reqresRequestClient(
//       "https://reqres.in/api/users?page=1"
//     );
//     console.log(result);
//   } catch (error) {
//     alert(error.message);
//   } finally {
//     console.log("Done");
//   }
// }

// main();

// *******************************************
// Promise All
// *******************************************

// const users = [];
// const totalUsers = 12;
// async function fetchAllUsers() {
//   try {
//     const requests = [];
//     for (let id = 1; id <= totalUsers; id++) {
//       requests.push(reqresRequestClient(`https://reqres.in/api/users/${id}`));
//     }
//     const results = await Promise.all(requests);
//     console.log(results);
//   } catch (error) {
//     alert(error.message);
//   }
// }

// fetchAllUsers();

// const users = [];
// const totalUsers = 12;
// async function fetchAllUsers2() {
//   try {
//     const ids = [];
//     for (let id = 1; id <= totalUsers; id++) ids.push(id);
//     const results = await Promise.all(
//       ids.map((id) => {
//         return reqresRequestClient(`https://reqres.in/api/users/${id}`);
//       })
//     );
//     console.log(results);
//   } catch (error) {
//     alert(error.message);
//   }
// }

// fetchAllUsers2();

// *******************************************
// Promise Race
// *******************************************

// const users = [];
// const totalUsers = 12;
// async function fetchOneUserFromAllUsersWhenUserComesFirst() {
//   try {
//     const ids = [];
//     for (let id = 1; id <= totalUsers; id++) ids.push(id);
//     const result = await Promise.race(
//       ids.map((id) => {
//         return reqresRequestClient(`https://reqres.in/api/users/${id}`);
//       })
//     );
//     console.log(result);
//   } catch (error) {
//     alert(error.message);
//   }
// }

// fetchOneUserFromAllUsersWhenUserComesFirst();
