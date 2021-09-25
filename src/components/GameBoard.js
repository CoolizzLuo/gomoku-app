import React, { useCallback } from 'react'


const size = 19
const Square = ({onClick, value}) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  )
}

const GameBoard = ({squares, onClick}) => {
  const renderSquare = useCallback((i) => {
    return <Square value={squares[i]} onClick={() => onClick(i)}/>
  }, [squares, onClick])

  return (
    <div>
      { [...Array(size).keys()].map((i) => {
          return (
            <div className="board-row">
              {
                [...Array(size).keys()].map((j) =>  renderSquare(j + i * size)
              }
            </div>
          )
          
      }) }
      {/* <div className="board-row">
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
      </div> */}
    </div>
  );
}

export default GameBoard;