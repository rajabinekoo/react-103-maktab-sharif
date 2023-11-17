async function main() {
  const start = performance.now();
  let calls = [];

  for (let index = 0; index < 10; index++) {
    calls.push(fetch("https://reqres.in/api/users?page=1"));
  }

  const response = await Promise.all(calls);
  const end = performance.now();
  console.log(response);
  console.log(end - start);
}

main();
