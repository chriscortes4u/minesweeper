var React = require('react')

var CellComponent = require('./cell')
// var printRow = function(rowArray, rowNum) {
//     var i,
//         cell,
//         strRow = '';
//
//     //start the row with the row numbers
//     strRow += rowNum !== undefined
//         ? ' ' + rowNum + ' '
//         : '';
//
//
//     //print this row to the console
//     console.log(strRow)
// };

module.exports = function (props) {
  return <div className="row">
    { props.row.map(cell =>
      <CellComponent cell={cell} board={props.board} />
    )}
  </div>
