import { useState } from "react"

export const CounterApp = () => {
    const [ counter, setCounter] = useState({
      counter1: 10,
      counter2: 20,
      counter3: 30
    })

    Array.push("asf")


    const { counter1, counter2, counter3 } = counter;

    

  return (
    <>
        <h1>CounterApp1: { counter1 } </h1>
        <h1>CounterApp2: { counter2 } </h1>
        <h1>CounterApp3: { counter3 } </h1>

        <button onClick={ () => setCounter({ ...counter, counter1: counter1 + 1 }) } >+1</button>
    </>
  )
}
