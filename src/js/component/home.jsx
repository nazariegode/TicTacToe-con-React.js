import React, { useState } from 'react';
import Board from './board';
import Players from './players';

const Home = () => {
  const [players, setPlayers] = useState({ player1: "", player2: "" });
  const [gameStarted, setGameStarted] = useState(false);

  const startGame = (player1, player2) => {
    setPlayers({ player1, player2 });
    setGameStarted(true);
  };

  const resetGame = () => {
    setPlayers({ player1: "", player2: "" });
    setGameStarted(false);
  };

  return (
    <div className="app">
      {gameStarted ? (
        <>
          <Board players={players} resetGame={resetGame} />
          <button className='btn btn-dark' onClick={resetGame}>Back</button>
        </>
      ) : (
        <Players startGame={startGame} />
      )}
    </div>
  );
};

export default Home;