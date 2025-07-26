import { useReducer } from "react"
const intialState = { count: 0 }
function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 }
    }
    switch (action.type) {
        case "decrement":
            return { count: state.count - 1 }
    }
}
export default function Usereducer() {

    const [state, dispatch] = useReducer(reducer, intialState)
    return <>

        <h3>count {state.count}</h3>
        <button onClick={() => dispatch({ type: "increment" })}>increment</button>
        <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
    </>

}
