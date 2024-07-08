import TicketNum from "./TicketNum";
import "./Ticket.css";
export default function Ticket({Ticket})
{
   return(
    <div className="Ticket">
        <p>Ticket No:</p>
       {Ticket.map((num,idx)=>( 
        <TicketNum num={num} key={idx}/>
       ))}
    </div> 
   )
}