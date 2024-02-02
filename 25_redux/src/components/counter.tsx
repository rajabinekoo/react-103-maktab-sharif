import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { decreament, increament, reset } from "../redux/counter-slice";

export const Counter: React.FC = () => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  const onClickIncreament = () => {
    dispatch(increament());
  };

  const onClickDecreament = () => {
    dispatch(decreament());
  };

  const onClickReset = () => {
    dispatch(reset());
  };

  return (
    <>
      <p>{count}</p>
      <button onClick={onClickIncreament}>Increament</button>
      <button onClick={onClickDecreament}>Decreament</button>
      <button onClick={onClickReset}>Reset</button>
    </>
  );
};
