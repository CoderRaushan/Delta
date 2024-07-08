// NewLottery.jsx
import React, { useState } from 'react';
import { TickerNoGenerate, Sum } from './main';
import Ticket from './Ticket';

export default function NewLottery({ n, WinningSum }) {
  const [ticket, setTicket] = useState(TickerNoGenerate(n));
  const isWinning = Sum(ticket) === WinningSum;

  const generateNewTicket = () => {
    setTicket(TickerNoGenerate(n));
  };

  return (
    <div>
      <Ticket Ticket={ticket} />
      <button onClick={generateNewTicket}>Buy New Ticket</button>
      <h3>{isWinning && "Congratulations! You won!"}</h3>
    </div>
  );
}
