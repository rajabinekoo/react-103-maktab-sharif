import { useContext } from "react";
import { CounterContext, CounterContextProvider } from "./counter.context";

function App() {
  return (
    <CounterContextProvider>
      <CounterContainer />
    </CounterContextProvider>
  );
}

// Child of App
function CounterContainer() {
  return (
    <>
      <Counter />
    </>
  );
}

// GrandChild of App
function Counter() {
  const { count, increase } = useContext(CounterContext);

  return (
    <>
      <button onClick={increase}>Increase</button>
      <p>{count}</p>
    </>
  );
}

export default App;
