import { useEffect, useState } from "react";
import "./effects.css";
export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;

  useEffect(() => {
    console.log("hey");
  });

  const handleInputChange = ({target})=> {
      console.log('event',target.value)
      setFormState({
          ...formState,
          [target.name] :target.value

      })
  }

  return (
    <>
      <h1>useEffect</h1>
      <hr />

      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="tu nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>
    </>
  );
};
