"use client";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { decrement, increment } from "@/store/reducers/counterReducer/counterReducer";
import React from "react";

export default function Counter() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.value);

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrement = () => {
    dispatch(increment());
  };

  return (
    <div>
      <h1>MAIN PAGE</h1>
      <h2 data-testid='value-id'>{count}</h2>
      <div className='flex gap-3'>
        <button data-testid='decrement-btn' className='bg-red-400' onClick={handleDecrement}>
          decrement
        </button>
        <button data-testid='increment-btn' className='bg-green-400' onClick={handleIncrement}>
          increment
        </button>
      </div>
    </div>
  );
}
