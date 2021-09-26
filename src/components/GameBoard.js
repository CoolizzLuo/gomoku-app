import React, { useState, useCallback } from 'react'
import styled from 'styled-components'


const BOARD_SIZE = 19

const BoardWrapper = styled.div`
  border: 1px solid #aaa;
  border-radius: 2px;
  width: 38rem;
  height: 38rem;
  display: flex;
  flex-wrap: wrap;
`

const SquareWrapper = styled.i`
  border: 1px solid #aaa;
  border-radius: 2px;
  width: calc(100%/19);
  height: calc(100%/19);
  flex-shrink: 0;
  flex-grow: 0;
  cursor: pointer;
  user-select: none;
  position: relative;

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 75%;
    height: 75%;
    border-radius: 50%;
    border: 1px solid #000;
    background: ${(props) => (props.chess === "1" ? "red" : "#ccc")};

    ${props => !props.chess && `
      display: none;
    `}

    ${props => props.value === 1 && `
      border: 1px solid #888;
      box-shadow: 2px 2px 3px rgba(0,0,0,0.2), 2px 2px 5px rgba(0,0,0,0.2);
    `}

    ${props => props.value === 2 && `
      border: 1px solid #888;
      box-shadow: 2px 2px 3px rgba(255,255,255,0.2), 2px 2px 5px rgba(255,255,255,0.2);
    `}
  }
`

const GameBoard = ({squares, onClick}) => {

  return (
    <BoardWrapper>
      { 
        squares.map((row_square, row) => (
          row_square.map((col_square, col) => (
            <SquareWrapper 
              key={`${row}-${col}`} 
              chess={col_square}
              onClick={() => onClick(row, col)}
            />
          ))
        ))
      }
    </BoardWrapper>
  );
}

export default GameBoard;