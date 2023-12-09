import {  useMemo, useState } from 'react'

const counterNumber = (count) => {
    console.log("render")
    let i = 0;
    while (i < 900000000) i++;
    return count + 1;
}

function UseMemo() {
    const [count, setCount] = useState(0)
    const [active, setActive] = useState(true)

    const Incriment = () => setCount((count) => count + 1)
    const Decriment = () => setCount((count) => count - 1)

    const Toggle = () => {
        setActive(!active)
    }

    const color = {
        color: active ? "red" : "#000"
    }

    const number = useMemo(() => counterNumber(count), [count])

    return (
        <>
            <div>
                <h1 style={color}>useMemo hook Example</h1>
                <div className="card">
                    <div>Count: {number}</div>
                    <button onClick={Incriment}>Incriment</button>
                    <button onClick={Decriment}>Decriment</button>
                    <button onClick={Toggle}>Toggle</button>
                </div>
            </div>
        </>
    )
}

export default UseMemo
