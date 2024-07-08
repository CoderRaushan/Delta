// App.jsx
import React from 'react';
import './App.css';
import NewLottery from './NewLottery';

function App() {
  return (
    <div className="App">
      <NewLottery n={4} WinningSum={16} />
      <NewLottery n={7} WinningSum={37} />
    </div>
  );
}

export default App;
