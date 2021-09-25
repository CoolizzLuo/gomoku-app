import React, { useMemo } from 'react'

const GameInfo = ({status, stepNumber, history, jumpTo}) => {
  const moves = useMemo(() => (history.map((step, move) => {
    const desc = move ? ('Go to move #' + move) : ('Go to game start')

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    )
  })), [history, jumpTo])

  return (
    <>
      <div>{status}</div>
      <div>current step: {stepNumber}</div>
      <ol>{moves}</ol>
    </>
  )
}

export default GameInfo