import { useState } from "react"

export default function UseState() {
    const [isvisible, setvisible] = useState(true)

    function handleclick() {
        setvisible(!isvisible)
    }
    return <div>
        <button onClick={handleclick}>show text</button>
        {isvisible && <p>this is the text that get toggeled</p>}
    </div>
}