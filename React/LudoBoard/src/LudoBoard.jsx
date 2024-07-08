import { useState } from "react"
export default function LudoBoard()
{
    let [Moves,setMoves]=
    useState({
        red:0,yellow:0,green:0,blue:0
    });

    let blue=()=>{
        setMoves((preValue)=>
        {
           return {...preValue,blue:preValue.blue+1}//... seprade operator(...)
        });
    } 
    let yellow=()=>{
        setMoves({...Moves,yellow:Moves.yellow+1});//... seprade operator(...)
    }
    
    return (
        <div style={{border:"2px solid black",padding:"2rem",borderRadius:"2rem"}}>
            <p>Game Begins!</p>
            <div>
                <p>Blue color:</p>
                <button style={{backgroundColor:"blue",color:"white"}} onClick={blue}>{Moves.blue}+</button>

                <p>Yellow color:</p>
                <button onClick={yellow} style={{backgroundColor:"yellow",color:"black"}}>{Moves.yellow}+</button>

                <p>Green color:</p>
                <button style={{backgroundColor:"green",color:"white"}}>+3</button>

                <p>Red color:</p>
                <button style={{backgroundColor:"red",color:"white"}}>+4</button>
            </div>
        </div>
    )
}