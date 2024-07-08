import { useState } from "react";
import "./Lottry.css";
import {TickerNoGenerate,Sum} from "./main";
export default function Lottry()
{
   
    let [Ticket,setTicket]=useState(TickerNoGenerate(3));
    let isWinning=Sum(Ticket)===15;
    let genereatenewTicket=()=>
        {
            setTicket(TickerNoGenerate(3));
        }
    // console.log(isWinning)===15;
    return (
        <div>
            <h1>Lottery Ticket </h1>
            <div className="ticket">
                <span>{Ticket[0]}</span>
                <span>{Ticket[1]}</span>
                <span>{Ticket[2]}</span>
                <br />
            </div>
            <br />
            <button onClick={genereatenewTicket}>Buy New Ticket</button>
            <h3>{isWinning && "Congratulations! you won"}</h3>
        </div>
    )
};