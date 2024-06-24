import React, { useState } from 'react';

function Players({ startGame }) {
    const [player1, setPlayer1] = useState('');
    const [player2, setPlayer2] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        startGame(player1, player2);
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className='form'>
                <h2>TicTacToe with ReactJs</h2>
                <h2>Choose a Weapon</h2>
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Player X"
                        value={player1}
                        onChange={(e) => setPlayer1(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Player O"
                        value={player2}
                        onChange={(e) => setPlayer2(e.target.value)}
                    />
                </div>
                <button className="btn btn-dark" type="submit">Start Game</button>
            </form>
        </div>
    );
}

export default Players;
