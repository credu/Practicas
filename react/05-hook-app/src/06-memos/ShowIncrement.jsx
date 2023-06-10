import React from "react"

export const ShowIncrement = React.memo(({ increment }) => {
    console.log("first")
    return (
        <button
            className="btn btn-primary"
            onClick={() => increment(1)}
        >
            +1
        </button>
    )
})