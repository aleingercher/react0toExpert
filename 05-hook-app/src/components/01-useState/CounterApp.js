import { useEffect, useState } from "react";
import "./CounterApp.css";

const CounterApp = () => {
  const [counter, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 20,
    counter4: 20,
  });

  const {counter1, counter2} = counter;

  useEffect(() => {
    document.title = `El counter esta en ${counter1}`;
  });

  return (
    <>
      <h1>Counter 1: {counter1} </h1>
      <h1>Counter 2: {counter2} </h1>

      <button
        className="btn btn-dark btn-lg"
        onClick={() =>
          setCounter({
            ...counter,
            counter1: counter1 + 1,
          })
        }
      >
        +1
      </button>
    </>
  );
};

export default CounterApp;
