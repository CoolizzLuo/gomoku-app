import styled from 'styled-components'


const BoardWrapper = styled.div`
  box-sizing: border-box;
  border: 1px solid #666;
  border-radius: 2px;
  width: 38rem;
  height: 38rem;
  display: flex;
  flex-wrap: wrap;
  background: #BB9966;
  box-shadow: 6px 6px 10px rgba(51,51,51,0.6);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    /* top: 0;
    bottom: 0;
    left: 0;
    right: 0; */
    inset: 0;
    border: calc(1rem - .4px) solid #BB9966;
    pointer-events: none;
  }

`

const SquareWrapper = styled.div`
  box-sizing: border-box;
  /* border: 1px solid #aaa; */
  border-radius: 2px;
  width: calc(100%/19);
  height: calc(100%/19);
  flex-shrink: 0;
  flex-grow: 0;
  cursor: pointer;
  user-select: none;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 1px;
    background: #111;
    transform: translateX(-50%);
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    height: 1px;
    background: #111;
    transform: translateY(-50%);
  }

  i.chess {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    width: 1.4rem;
    height: 1.4rem;
    z-index: 1;

    ${props => props.chess === 1 && `
      // border: 1px solid #ccc;
      background: linear-gradient(315deg, #dadada, #fff);
      box-shadow: inset 16px 14px 10px 1px #000, -3px -3px 3px -2px #353232;
      opacity: 1;
    `}

    ${props => props.chess === 2 && `
      // border: 1px solid #666;
      background: #ddd;
      box-shadow: inset 16px 14px 10px 1px #fff, -3px -3px 3px -2px #666;
      opacity: 1;
    `}

    &:active {
      transform: translate(-60%, -60%);
    }

    &::after {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      ${props => (props.mark && !props.chess) && `
        content: '';
        width: .5rem;
        height: .5rem;
        background: #111;
      `}
    }
  }
`

const isMark = (row, col) => [4, 10, 16].includes(row + 1) && [4, 10, 16].includes(col + 1)

const GameBoard = ({squares, onClick}) => {

  return (
    <BoardWrapper>
      { 
        squares.map((row_square, row) => (
          row_square.map((col_square, col) => (
            <SquareWrapper 
              key={`${row}-${col}`} 
              chess={col_square}
              mark={isMark(row, col)}
              onClick={() => onClick(row, col)}
            >
              <i className='chess'></i>
            </SquareWrapper>
          ))
        ))
      }
    </BoardWrapper>
  );
}

export default GameBoard;