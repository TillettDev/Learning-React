import React, { useState } from 'react';

function Mood () {
    const [isHappy, setIsHappy] = useState(true);
    const toggleIsHappy = () => setIsHappy(!isHappy);

    return(
        <div>
            <h4 onClick={toggleIsHappy}>{isHappy ? ":)" : ":("}</h4>
        </div>
    )
}

export default Mood;