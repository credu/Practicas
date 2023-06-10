import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallBackHook = () => {
    const [counter, setCounter] = useState( 10 );

    const increment = useCallback(
      (value) => {
        setCounter( counter => counter + value );
      },
      [],
    )

    return (
        <>
            <h1>useCallback Hook: {counter} </h1>
            
            <ShowIncrement increment={ increment } />
        </>
    )
}
