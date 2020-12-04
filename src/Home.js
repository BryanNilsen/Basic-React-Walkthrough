import React, { useState } from 'react';

export const Home = (props) => {
    const bakers = ["Dusty", "Ginger", "Anita", "Josephine"]
    const [num, setNum] = useState(0)

    const takeNumber = () => {
        let order = num + 1
        setNum(order)
    }

    return (
        <div>
            <h1>Welcome to Bay and Marble, {props.user}!</h1>
            <p>We've been crafting the crazy-delicious doughnuts since 2020.</p>
            <p>Meet our bakers:</p>
            <ul>
                {bakers.map(baker => <li key={baker}>{baker}</li>)}
            </ul>
            <h2>Want to place an order?</h2>
            <button onClick={takeNumber}>Take a Number</button>
            {num === 0 ? "" : <h3>Your number is {num}</h3>}
        </div>
    )
}