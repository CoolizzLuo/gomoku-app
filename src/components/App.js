import React, { useState, useCallback, useMemo } from 'react'
import './App.css'
import GameBoard from './GameBoard'
import GameInfo from './GameInfo'
import calculateWinner from '../calculateWinner'

const App = () => {
  const [history, setHistory] = useState(() => {
    return [
      { 
        squares: Array(9).fill(null) 
      }
    ]
  })
  const [xIsNext, setXIsNext] = useState(true)
  const [stepNumber, setStepNumber] = useState(0)

  const currentSquares = useMemo(() => {
    return history[stepNumber].squares
  }, [history, stepNumber])

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
    const newHistory = history.slice(0, stepNumber + 1)
    const squares = [...currentSquares] 
    if (xIsNext === null || squares[i]) return
    squares[i] = xIsNext ? 'X' : 'O'
    setHistory([...history.slice(0, stepNumber + 1), {squares}])
    setStepNumber(newHistory.length)
    setXIsNext(!xIsNext)
  }, [history, xIsNext, currentSquares, stepNumber])

  const jumpTo = useCallback((move) => {
    setStepNumber(move)
    setXIsNext((move % 2) === 0)
  }, [setStepNumber, setXIsNext])

  return (
    <div className="game">
      <div className="game-board">
        <GameBoard 
          squares={currentSquares}
          onClick={handleClick}
        />
      </div>
      <div className="game-info">
        <GameInfo
          status={status}
          stepNumber={stepNumber}
          history={history}
          jumpTo={jumpTo}
        />
      </div>
    </div>
  )
}

export default App
