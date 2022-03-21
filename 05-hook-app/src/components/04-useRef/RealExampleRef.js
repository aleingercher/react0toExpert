import { useState } from "react";
import { MultipleCustomHooks } from "../03-examples/MultipleCustomHooks";

export const RealExampleRef = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>RealExampleRef</h1>
      <hr />

      <button onClick={()=>setShow(!show)} className="mb-5 btn btn-outline-danger">
        Show
      </button>
      {show && <MultipleCustomHooks />}

    </div>
  );
};
