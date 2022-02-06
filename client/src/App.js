import React from 'react';
import logo from './logo.svg';
import './App.css';
import BingoComponent from './BingoComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          When React goes Bingo, and Go goes Bongo, you get:
        </p>
        <BingoComponent />
      </header>
    </div>
  );
}

export default App;