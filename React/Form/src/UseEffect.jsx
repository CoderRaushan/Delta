import { useState,useEffect} from "react"
export default function UseEffect()
{
    let [Counterx,setCounterx]=useState(0);
    let [Countery,setCountery]=useState(0);
    const countfunx=()=>
    {
        setCounterx((Counterx)=>Counterx+1);
    }

    const countfuny=()=>
    {
        setCountery((Countery)=>Countery+1);
    }
    useEffect(function dosomthing()
    {
        console.log("page is rerendered!");
    },
    // [Counterx,Countery] 1.st option 
    //second option
    []   //dono hi kewal starting me hi rerender honge dubara nahi 
);  //to controll rerendering process 

    return(
       
        <div>
            <h3>countX={Counterx}</h3>
            <button onClick={countfunx}>+1</button>
            <h3>countY={Countery}</h3>
            <button onClick={countfuny}>+1</button>
        </div>
    )
};