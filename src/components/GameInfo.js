import { useMemo } from 'react'
import styled from 'styled-components'

const InfoWrapper = styled.div`
  width: 200px;
  height: 38rem;
  overflow: auto;
  margin-left: 2rem;
  padding-left: 1rem;
`

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
  z-index: 1;

  &:active {
    transform: translateY(.2rem);
    box-shadow: none;
  }

  ${(props) => props.active && `
    font-weight: 900;
    background: #666;
    color: #ccc;
    box-shadow: .1rem .1rem .1rem #333;
  `}

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
        <Button active={stepNumber === move} onClick={() => jumpTo(move)}>{desc}</Button>
      </li>
    )
  })), [history, stepNumber, jumpTo])

  return (
    <>
      <div>{status}</div>
      <div>current step: {stepNumber}</div>
      <ol>{moves}</ol>
    </>
  )
}

export default GameInfo