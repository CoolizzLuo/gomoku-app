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

const Board = ({squares, onClick}) => {
  const renderSquare = useCallback((i) => {
    return <Square value={squares[i]} onClick={() => onClick(i)}/>
  }, [squares, onClick])

  return (
    <div>
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
  const [history, setHistory] = useState(() => {
    return [
      { 
        squares: Array(9).fill(null) 
      }
    ]
  })
  const [xIsNext, setXIsNext] = useState(true)
  const currentSquares = useMemo(() => {
    return history[history.length - 1].squares
  }, [history])

  const winner = useMemo(() => {
    return calculateWinner(currentSquares)
  }, [currentSquares])

  const status = useMemo(() => {
    if (winner) {
      setXIsNext(null)
      return 'Winner: ' + winner;
    } else {
      return 'Next player: ' + (xIsNext ? 'X' : 'O');
    }
  }, [xIsNext, winner])

  const handleClick = useCallback((i) => {
    const squares = [...currentSquares] 
    if (xIsNext === null || squares[i]) return
    squares[i] = xIsNext ? 'X' : 'O'
    setHistory([...history, {squares}])
    setXIsNext(!xIsNext)
  }, [history, xIsNext, currentSquares])

  const moves = history.map((step, move) => {
      const desc = move ? ('Go to move #' + move) : ('Go to game start')
      const jumpTo = (move) => console.log(move)
  
      return (
        <li>
          <button onClick={() => jumpTo(move)}>{desc}</button>
        </li>
      )
    })

  return (
    <div className="game">
      <div className="game-board">
        <Board 
          squares={currentSquares}
          onClick={handleClick}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  )
}

export default App
