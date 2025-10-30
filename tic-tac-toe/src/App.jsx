import { useState } from "react";

import GameBoard from "./components/GameBoard.jsx";
import Player from "./components/Player.jsx";
import Log from "./components/Log.jsx";
import { WINNING_COMBINATIONS } from './winning-combinations.js';
import GameOver from "./components/GameOver.jsx";

const initGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currPlayerTurn = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currPlayerTurn = 'O';
  }

  return currPlayerTurn;
}

function deriveGameBoard(gameTurns) {
  let gameBoard = [...initGameBoard.map(arr => [...arr])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return gameBoard;
}

function deriveWinner(gameBoard, players){
  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = players[firstSquareSymbol];
    }
  }

  return winner;
}

function App() {
  const [players, setPlayers] = useState({
    X: 'Player 1',
    O: 'Player 2',
  });

  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  const gameBoard = deriveGameBoard(gameTurns);
  
  const winner = deriveWinner(gameBoard, players);


  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rIndex, cIndex) {
    setGameTurns(prevTurn => {
      const currPlayer = deriveActivePlayer(prevTurn);

      const updatedTurns = [
        { square: { row: rIndex, col: cIndex }, player: currPlayer },
        ...prevTurn
      ];

      return updatedTurns;
    })
  }

  function handleRestart() {
    setGameTurns([]);
  }

  function handleNameSave(symbol, newName) {
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol]: newName
      }
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName='Player1' symbol="X" isActive={activePlayer === 'X'} changeName={handleNameSave}/>
          <Player initialName='Player2' symbol="O" isActive={activePlayer === 'O'} changeName={handleNameSave}/>
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
        <GameBoard squareSelected={handleSelectSquare} board={gameBoard} />
      </div>
      <Log currTurns={gameTurns} />
    </main>
  )
}

export default App
