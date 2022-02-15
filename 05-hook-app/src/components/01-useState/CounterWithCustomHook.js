import useCounter from "../../hooks/useCounter";
import "./CounterApp.css";

const CounterWithCustomHook = () => {
  const { state: counter, increment, decrement, reset, step } = useCounter(undefined, 10);

   return (
    <>
      <div className="counter">
        <button className="btn btn-dark btn-lg" onClick={decrement}>
          -{step}
        </button>
        <h1>Counter with hook: {counter} </h1>
        <hr />

        <button className="btn btn-dark btn-lg" onClick={increment}>
          +{step}
        </button>
      </div>
      <div className="btn btn-warning reset" onClick={reset}>reset</div> 
    </>
  );
};

export default CounterWithCustomHook;
