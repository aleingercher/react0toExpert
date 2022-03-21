import React, { useRef } from "react";

export const FocusScreen = () => {


    const inputRef = useRef()


    const handleClick =()=> {
        // document.querySelector('input').select()
        inputRef.current.select()
        console.log('inputRef', inputRef.current.type)
    }
  return (
    <div>
      <h1>Focus Screen</h1>

      <hr />

      <input ref={inputRef} type="text" className="form-control" placeholder="su nombre" />

      <button className="btn btn-outline-warning mt-5" onClick={handleClick}>Focus</button>
    </div>
  );
};
