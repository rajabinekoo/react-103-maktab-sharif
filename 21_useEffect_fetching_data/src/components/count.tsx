import { useEffect, useState } from "react";

// first rendering => mount
// rerendering => update
// hide this component => unmount

export const Count = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const increase = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  const increase2 = () => {
    setCount2((prev) => {
      return prev + 1;
    });
    setCount2((prev) => prev + 1);
    setCount2((prev) => prev + 1);
    setCount2((prev) => prev + 1);
  };

  useEffect(() => {
    console.log("Count updated");

    return () => {
      console.log("Last operation before transition or updating");
    };
  });

  useEffect(() => {
    console.log("Count component mounted");

    return () => {
      console.log("Count component unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("New count value is:", count);

    return () => {
      console.log("Last operation before updating count1");
    };
  }, [count]);

  return (
    <div>
      <p>count1: {count}</p>
      <p>count2: {count2}</p>
      <button
        className="bg-red-300 border rounded px-4 py-1"
        onClick={increase}
      >
        Increase count1
      </button>
      <button
        className="bg-green-300 border rounded px-4 py-1"
        onClick={increase2}
      >
        Increase count2
      </button>
    </div>
  );
};
