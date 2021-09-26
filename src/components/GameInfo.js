import React, { useMemo } from 'react'
import styled from 'styled-components'

const Button = styled.button`
  font-size: .7rem;
  padding: .3rem .4rem;
  margin: .4rem .2rem 0;
  border: none;
  outline: none;
  border-radius: 4px;
  background: #ccc;
  box-shadow: .1rem .1rem .1rem #999;
  transition: .2s;
  cursor: pointer;
  user-select: none;

  &:active {
    transform: translateY(.2rem);
    box-shadow: none;
  }

  /* ${props => props.stepNumber===props.move && `
    background: #666;
    color: #ccc;
  `} */


  &:hover {
    background: #666;
    color: #ccc;
  }
`

const GameInfo = ({status, stepNumber, history, jumpTo}) => {
  const moves = useMemo(() => (history.map((step, move) => {
    const desc = move ? ('Go to move #' + move) : ('Go to game start')

    return (
      <li key={`#${move}`}>
        <Button onClick={() => jumpTo(move)}>{desc}</Button>
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