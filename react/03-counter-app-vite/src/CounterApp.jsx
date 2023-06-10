import PropTypes from 'prop-types'
import React, { useState } from 'react'

export const CounterApp = ({ value }) => {


  const [array, setArray] = useState(["elias","jesus"]);

  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter( counter + 1 );
  }

  const handleSubstract = () => {
    setCounter( counter - 1);
  }

  const handleReset = () => {
    setCounter( value );
  }

  const sumale = () => {
    setArray( [...array, "Vegetta"] )
  }

  return (
    <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>
        <h2> { array } </h2>
        <button onClick={ sumale }>sumar</button>
        <button onClick={ handleAdd }>+1</button>
        <button onClick={ handleSubstract }>-1</button>
        <button aria-label='btn-reset' onClick={ handleReset }>Reset</button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
}