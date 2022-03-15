import { useState } from "react";

/**
 * Custom hook para manejar formularios
 * @param {Object} initialState valor inicial del formulario
 * @returns {Array<Object>} devuelve un array con el valor y una funcion para manejar el cambio de estado del formulario
 */
export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  return [values, handleInputChange];
};
