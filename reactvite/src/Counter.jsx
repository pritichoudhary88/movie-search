import {useState} from "react"
function Counter () {
    const[Counter,setCounter]=useState(0);

    function Increment(){
        if(Counter<10)
        setCounter(Counter+1)
    }
function Decrement(){
    if(Counter>0)
        setCounter(Counter-1)
    }

    return(
        <>
        <button onClick={Increment}>Increment</button>
        <p>{Counter}</p>
        <button onClick={Decrement}>Decrement</button>
        
        </>
    )
}
export default Counter