import { useState } from "react"

export default function EventHandling() {
    const [message, setmessage] = useState("")
    const chngeMsg = (event) => {
        setmessage(event.target.value)
    }
    return <>
        <h1>hii1</h1>
        <input type="text" onChange={chngeMsg} placeholder="entert text" />

        <p>{message}</p>
    </>
}