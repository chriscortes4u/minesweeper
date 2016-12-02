const React = require('react')
const minesweeper = require('minesweeper')

var CellStateEnum = minesweeper.CellStateEnum
var CellFlagEnum = minesweeper.CellFlagEnum
var Cell = minesweeper.Cell
var Board = minesweeper.Board
//
// function cellState(cell){
// //add each cell in the row to the srting we will printRow
// for (i = 0; i < rowArray.length; i++) {
//     cell = rowArray[i]
//     if (cell.state === CellStateEnum.CLOSED) {
//         if (cell.flag === CellFlagEnum.NONE) {
//             strRow += getCellString(' ');
//         } else if (cell.flag === CellFlagEnum.EXCLAMATION) {
//             strRow += getCellString('!');
//         } else if (cell.flag === CellFlagEnum.QUESTIOn) {
//             strRow += getCellString('?')
//         }
//     } else if (cell.state === CellStateEnum.OPEN) {
//         if (cell.isMine) {
//             strRow += getCellString('*')
//         } else {
//             strRow += getCellString(cell.numAdjacentMines)
//         }
//     }
//   }
// }
//
// var getCellString = function(content) {
//     return '[' + content + ' ]';
// };

function cellState(cell) {
  if (cell.state === CellStateEnum.CLOSED) {
    if (cell.flag === CellFlagEnum.NONE) {
        return 'X'
    } else if (cell.flag === CellFlagEnum.EXCLAMATION) {
        return '!'
    } else if (cell.flag === CellFlagEnum.QUESTION) {
        return '?'
    }
  } else if (cell.state === CellStateEnum.OPEN) {
     if (cell.isMine) {
       return '*'
     } else {
       return cell.numAdjacentMines === 0 ?
         ' ' :
         cell.numAdjacentMines.toString()
     }
  }



module.exports = React.createClass({
    handleClick() {
        var cell = this.props.cell
        var board = this.props.board
        board.openCell(cell.x, cell.y)

    },
    render() {
      return  <div className="col-md-1" onClick={this.handleClick}>
            {  cellState(this.props.cell) }
        </div>
    }
})
