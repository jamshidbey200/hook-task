import React, { useEffect, useState } from 'react'

const CounterItem = ({ counterItem }) => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        const item = counterItem(1);
        setItem(item)
        console.log("Callback is working")
    }, [counterItem])

    return (
        <ul>
            {
                item.map((item) => (
                    <li key={item}>{item}</li>
                ))
            }
        </ul>
    )
}

export default CounterItem
