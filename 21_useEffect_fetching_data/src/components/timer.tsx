import { useEffect, useState } from "react";

export const Timer = () => {
  const [seconds, setSeconds] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  const increase = () => {
    setSeconds((prevSec) => prevSec + 1);
  };

  useEffect(() => {
    if (loading) return;
    const interval = setInterval(increase, 1000);

    return () => {
      clearInterval(interval);
      window.localStorage.setItem("timer", seconds.toString());
    };
  }, [loading, seconds]);

  useEffect(() => {
    if (!loading) return;
    setSeconds(Number(window.localStorage.getItem("timer") || 0));
    setLoading(false);
  }, [loading]);

  return <p>seconds {seconds}</p>;
};
