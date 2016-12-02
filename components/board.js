var React = require('react')
var RowComponent = require('./row')


module.exports = function (props) {
  return <div className="container">
    { props.board.grid().map(row =>
     <RowComponent row={row} board={props.board} />
   })}
  </div>
}
printBoard(board)

//
// var Board = minesweeper.Board
// var grid = board.grid()
// let board = new minesweeper.Board(mineArray)

//
// var printBoard = function(board) {
//     var i,
//         strColHead = ' ',
//         grid = board.grid()
//
//     //print a header that shows the column numbers
//     for (i = 0; i < board.numCols(); i++) {
//         strColHead += ' ' + i + ' ';
//     }
//     //print all the rows on the board
//     for (i = 0; i < board.numRows(); i++) {
//         printRow(grid[i], i)
//     }
// }
