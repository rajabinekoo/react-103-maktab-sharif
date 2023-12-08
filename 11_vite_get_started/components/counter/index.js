export function setupCounter(element) {
  // states
  let counter = 0;

  // handlers => written for events and affect on states
  // rendering
  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };

  // events
  element.addEventListener("click", () => setCounter(counter + 1));

  // default state values
  setCounter(0);
}
