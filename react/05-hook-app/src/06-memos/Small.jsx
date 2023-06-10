import React from 'react'

export const Small = React.memo(({ counter }) => {
    console.log(":")
    return (
        <small>{counter}</small>
    )
})
