import { useState } from "react";//1st step
export default function Counter() {
    let [count, setCount] = useState(0);//2nd step
    function increaseCount() {
        setCount(count + 1)//3rd step
        console.log(count);
    }
    return (
        <div>
            <button onClick={increaseCount}>Counter:{count}</button>
        </div>
    )
} 