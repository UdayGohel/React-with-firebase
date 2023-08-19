import React from "react";
import store from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../store/counterReducer";

const Counter = () => {
  //   // State: a counter value
  //   const [counter, setCounter] = React.useState(0);

  //   // Action: code that causes an update to the state when something happens
  //   const increment = () => {
  //     setCounter(prevCounter => prevCounter + 1)
  //   }

  const counter = useSelector((state) => state.counter.value);
  const { salary, name } = useSelector((state) => state.employee);
  const dispatch = useDispatch();

  const onInc = () => {
    dispatch(increment({}));
  };

  const onDec = () => {
    // dispatch(decrement({}));
  };

  const onAmm = () => {
    // dispatch(incrementByAmount({ amount: 5 }));
  };

  // View: the UI definition
  return (
    <div style={{ background: "white", fontSize: "50px" }}>
      Name: {name} <br />
      salary: {salary} <br />
      Value: {counter}
      <br />
      <br />
      <button onClick={onInc}>Increment</button>
      <br />
      <br />
      <button onClick={onDec}>Decrement</button>
      <br />
      <br />
      <button onClick={onAmm}>incrementByAmount</button>
    </div>
  );
};

export default Counter;
