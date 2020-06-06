import React from "react";

function Greeter ({name, age}) {
    const greet = () => {
        alert(`Hi ${name}`)
    }

    return(
        <div>
            <h1>Hello {name}</h1>
            <p>You are {age} years old</p>
            <button onClick={greet}>Click Me</button>
        </div>
    )
}

export default Greeter;