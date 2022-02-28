import React, { useEffect, useRef, useState } from "react";

export const Message = () => {

    const [coords, setCoords] = useState({x: 0, y: 0})
    const {x, y} = coords;

  useEffect(() => {
      console.log('coords', coords)
    const mouseMove = (e) => {
        const coordenadas = {x: e.x, y: e.y}
        setCoords( coordenadas)
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
    window.removeEventListener("mousemove", mouseMove);
      console.log("cleanup");
    };
  }, []);

  return <div>
      <h1>{`${x}, ${y}`}</h1>
  </div>;
};
