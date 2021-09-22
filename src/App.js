import React, { useState, useCallback, useMemo } from 'react'
import './App.css'
import calculateWinner from './calculateWinner'

const Square = ({onClick, value}) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  )
}

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)

  const handleClick = useCallback((i) => {
    if (xIsNext === null || squares[i]) return
    const newSquares = [...squares];
    newSquares[i] = xIsNext ? 'X' : 'O'
    setSquares(newSquares)
    setXIsNext(!xIsNext)
  }, [squares, xIsNext])

  const renderSquare = useCallback((i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)}/>
  }, [squares, handleClick])

  const status = useMemo(() => {
    const winner = calculateWinner(squares);
    if (winner) {
      setXIsNext(null)
      return 'Winner: ' + winner;
    } else {
      return 'Next player: ' + (xIsNext ? 'X' : 'O');
    }
  }, [squares, xIsNext])

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

const App = () => {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  )
}

export default App
