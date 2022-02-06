import React from 'react';
import './App.css';
import BingoComponent from './BingoComponent';
import bingoBongoPhoto from './bingo-bongo.jpeg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={bingoBongoPhoto} className="App-logo" alt="logo" />
        <p>
          When React goes Bingo, and Go goes Bongo, you get:
        </p>
        <BingoComponent />
      </header>
    </div>
  );
}

export default App;