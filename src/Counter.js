import React, { useState } from "react";

function Counter () {
    const [count, setCount] = useState(0);


    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setCount(count - 1)}>-1</button>
            <button onClick={() => setCount(count * count)}>x&#178;</button>
            <button onClick={() => setCount(count - count)}>Reset</button>
        </div>
    )
}

export default Counter;