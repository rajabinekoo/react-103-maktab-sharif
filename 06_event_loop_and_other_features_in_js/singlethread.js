async function main() {
  const start = performance.now();
  let responses = [];

  for (let index = 0; index < 10; index++) {
    const response = await fetch("https://reqres.in/api/users?page=1");
    responses.push(response);
  }

  const end = performance.now();
  console.log(responses);
  console.log(end - start);
}

main();
