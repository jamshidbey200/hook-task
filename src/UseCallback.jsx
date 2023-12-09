import { useCallback, useState } from 'react'
import CounterItem from './CounterItem'

function UseCallback() {
    const [count, setCount] = useState(0)
    const [active, setActive] = useState(true)

    const Incriment = () => setCount((count) => count + 1)
    const Decriment = () => setCount((count) => count - 1)

    const Toggle = () => {
        setActive(!active)
        console.log("Callback not working")
    }

    const color = {
        color: active ? "red" : "#000"
    }

    const callbackFn = useCallback(() => {
        return new Array(count).fill('').map((_, ind) => `Counter number ${ind + 1}`)
    }, [count])

    return (
        <>
            <div>
                <h1 style={color}>useCallback hook Example</h1>
                <div className="card">
                    <button onClick={Incriment}>Incriment</button>
                    <button onClick={Decriment}>Decriment</button>
                    <button onClick={Toggle}>Toggle</button>
                </div>
                <CounterItem counterItem={callbackFn} />
            </div>
        </>
    )
}

export default UseCallback
