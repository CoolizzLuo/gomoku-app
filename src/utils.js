export const calculateWinner = (squares) => {
  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 19; j++) {
      if (
        squares[i][j] !== 0 &&
        squares[i][j] === squares[i + 1][j] &&
        squares[i][j] === squares[i + 2][j] &&
        squares[i][j] === squares[i + 3][j] &&
        squares[i][j] === squares[i + 4][j]
      ) {
        return squares[i][[j]]
      }
    }
  }

  // rows
  for (let i = 0; i < 19; i++) {
    for (let j = 0; j < 15; j++) {
      if (
        squares[i][j] !== 0 &&
        squares[i][j] === squares[i][j + 1] &&
        squares[i][j] === squares[i][j + 2] &&
        squares[i][j] === squares[i][j + 3] &&
        squares[i][j] === squares[i][j + 4]
      ) {
        return squares[i][[j]]
      }
    }
  }

  // top - right
  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 15; j++) {
      if (
        squares[i][j] !== 0 &&
        squares[i][j] === squares[i + 1][j + 1] &&
        squares[i][j] === squares[i + 2][j + 2] &&
        squares[i][j] === squares[i + 3][j + 3] &&
        squares[i][j] === squares[i + 4][j + 4]
      ) {
        return squares[i][j]
      }
    }
  }

  // top - left
  for (let i = 0; i < 15; i++) {
    for (let j = 18; j > 3; j--) {
      if (
        squares[i][j] !== 0 &&
        squares[i][j] === squares[i + 1][j - 1] &&
        squares[i][j] === squares[i + 2][j - 2] &&
        squares[i][j] === squares[i + 3][j - 3] &&
        squares[i][j] === squares[i + 4][j - 4]
      ) {
        return squares[i][j]
      }
    }
  }

  return null
}


// function countTotal(squares, currentY, currentX, directionY, directionX) {
//   const tempColor = squares[currentY][currentX]
//   let tempY = currentY + directionY
//   let tempX = currentX + directionX
//   let total = 0

//   while(tempX >= 0 && tempY >= 0 && squares[tempY][tempX] === tempColor) {
//     total++
//     tempY += directionY
//     tempX += directionX
//   }

//   return total;
// }

// export function calculateWinner(squares, y, x) {
//   if(y === null && x === null) return
//   if (
//     countTotal(squares, y, x, 1, 0) + countTotal(squares, y, x, -1, 0) >= 4 ||
//     countTotal(squares, y, x, 0, 1) + countTotal(squares, y, x, 0, -1) >= 4 ||
//     countTotal(squares, y, x, 1, 1) + countTotal(squares, y, x, -1, -1) >= 4 ||
//     countTotal(squares, y, x, 1, -1) + countTotal(squares, y, x, -1, 1) >= 4
//   ) {
//     return squares[y][x];
//   }

//   if (squares.every((row) => row.every((col) => col))) {
//     return "draw";
//   }
//   return null
// }