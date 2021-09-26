import React, { useState, useCallback, useMemo } from 'react'
import './App.css'
import GameBoard from './GameBoard'
import GameInfo from './GameInfo'
import calculateWinner from '../calculateWinner'

const App = () => {
  const [history, setHistory] = useState(() => [{ squares: Array(19).fill().map(() => Array(19).fill(0)) }])
  const [blackIsNext, setBlackIsNext] = useState(true)
  const [stepNumber, setStepNumber] = useState(0)

  const currentSquares = useMemo(() => {
    return history[stepNumber].squares
  }, [history, stepNumber])

  const winner = useMemo(() => {
    return calculateWinner(currentSquares)
  }, [currentSquares])

  const status = useMemo(() => {
    if (winner) {
      setBlackIsNext(null)
      return `Winner: ${winner === 1 ? 'Black' : 'White'}`;
    } else {
      return 'Next player: ' + (blackIsNext ? 'Black' : 'White');
    }
  }, [blackIsNext, winner])

  const handleClick = useCallback((row, col) => {
    const newHistory = history.slice(0, stepNumber + 1)
    const squares = [...currentSquares]
    squares[row] = [...squares[row]]
    if (blackIsNext === null || squares[row][col] ) return

    squares[row][col] = blackIsNext ? 1 : 2
    setHistory([...history.slice(0, stepNumber + 1), {squares}])
    setStepNumber(newHistory.length)
    setBlackIsNext(!blackIsNext)
  }, [history, blackIsNext, currentSquares, stepNumber])

  const jumpTo = useCallback((move) => {
    console.log('call jumpTo ' + move);
    setStepNumber(move)
    setBlackIsNext((move % 2) === 0)
  }, [setStepNumber, setBlackIsNext])


  return (
    <div className="game">
      <div className={blackIsNext ? 'black-hover' : 'white-hover'}>
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
