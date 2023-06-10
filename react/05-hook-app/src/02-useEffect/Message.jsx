import { useState } from "react";
import { useEffect } from "react";

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMoveMouse = ({ x, y }) => {
      setCoords({ x, y })
    }
    window.addEventListener("mousemove", onMoveMouse);

    return () => {
      window.removeEventListener("mousemove", onMoveMouse);
    }
  }, [])

  return (
    <>
      <h3>Usuario ya existe</h3>
      <h3>{ JSON.stringify( coords ) }</h3>
    </>
  )
}
