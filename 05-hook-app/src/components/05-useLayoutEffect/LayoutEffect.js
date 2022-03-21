import { useLayoutEffect, useRef, useState } from "react";
import useCounter from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "./layout.css";

export const LayoutEffect = () => {
  const { counter, increment } = useCounter(1);

  const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;

  const { data } = useFetch(url);

  const { quote } = !!data && data[0];

  const refParrafo = useRef();

  const [boxSize, setBoxSize] = useState({});

  useLayoutEffect(() => {
    setBoxSize(refParrafo.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div>
      <h1>LayoutEffect</h1>
      <hr />

      <blockquote className="blockquote " style={{ textAlign: "right" }}>
        <p ref={refParrafo}>{quote}</p>
      </blockquote>

      <pre>{Math.floor(boxSize.width)}</pre>

      <button onClick={increment} className="btn btn-outline-warning">
        proxima cita
      </button>
    </div>
  );
};
