import { useState, useCallback, useMemo } from 'react'
import { GAME_SIZE } from '../constants/data'
import { calculateWinner } from '../utils'
import './App.css'
import Modal from './Modal'
import GameBoard from './GameBoard'
import GameInfo from './GameInfo'
import Footer from './Footer'

const App = () => {
  const [history, setHistory] = useState(() => [{ squares: Array(GAME_SIZE).fill().map(() => Array(GAME_SIZE).fill(0)) }])
  const [blackIsNext, setBlackIsNext] = useState(true)
  const [stepNumber, setStepNumber] = useState(0)

  const currentSquares = useMemo(() => history[stepNumber].squares, [history, stepNumber])
  const winner = useMemo(() => calculateWinner(currentSquares), [currentSquares])
  const status = useMemo(() => {
    if (winner) {
      setBlackIsNext(null)
      return `Winner is ${winner === 1 ? 'Black' : 'White'}`
    } else {
      return 'Next player: ' + (blackIsNext ? 'Black' : 'White')
    }
  }, [blackIsNext, winner])

  const handleClick = useCallback((row, col) => {
    const newHistory = history.slice(0, stepNumber + 1)
    const squares = [...currentSquares]
    squares[row] = [...squares[row]]
    if (blackIsNext === null || squares[row][col] ) return

    squares[row][col] = blackIsNext ? 1 : 2
    setHistory([...newHistory, {squares}])
    setStepNumber(newHistory.length)
    setBlackIsNext(!blackIsNext)
  }, [history, blackIsNext, currentSquares, stepNumber])

  const jumpTo = useCallback((move) => {
    setStepNumber(move)
    setBlackIsNext((move % 2) === 0)
  }, [setStepNumber, setBlackIsNext])

  const renderModal = useCallback(() => (
    <Modal 
      msg={status}
      showing={true}
      reset={() => {
        setStepNumber(0)
        setHistory(history.slice(0, 1))
        setBlackIsNext(true)
      }
    }/>
  ), [status, history])

  return (
    <>
      <div className="game">
        { winner && renderModal()}
        <GameBoard 
          hover={blackIsNext}
          squares={currentSquares}
          onClick={handleClick}
        />
        <GameInfo
          status={status}
          stepNumber={stepNumber}
          history={history}
          jumpTo={jumpTo}
          />
      </div>
      <Footer/>
    </>
  )
}

export default App
