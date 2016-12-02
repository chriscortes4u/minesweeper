const minesweeper = require('minesweeper')
const React = require('react')
//const ReactDOM = require('react-dom')
const { map, addIndex } = require('ramda')
//var NavComponent = require('../components/nav')
//var BoardComponent = require('../components/board')

//var Board = minesweeper.Board

//var generateMineArray = minesweeper.generateMineArray

const mapIndex = addIndex(map)

const closedCss ={
  border: '4px',
  borderStyle: 'solid',
  backgroundColor: 'DimGray',
  borderLeftColor: 'white',
  borderTopColor: 'white',
  borderBottomColor:'black',
  borderRightColor: 'black',
  Height: '1000px',
  minWidth: '40px'
}

const openCss = {
  border: '4px',
  borderStyle: 'solid',
  backgroundColor: 'DimGray',
  borderLeftColor: 'black',
  borderTopColor: 'black',
  borderBottomColor:'white',
  borderRightColor: 'white',
  Height: '1000px',
  minWidth: '40px'
}

module.exports = React.createClass({
getInitialState(){
  return{
    grid: [],
    state: 0,
    board: null
  }
},

openCell(x,y){
  return(e) =>{
    let board =this.state.board
    board.openCell(x,y)
    this.setState({
      grid: board.grid(),
      state: board.state()
    })
  }
},


componentDidMount(){
  let mineArray = minesweeper.generateMineArray({
    rows: 8, cols: 8, mines: 12
  });
  var board = new minesweeper.Board(mineArray)
  this.setState({
    board: board,
    grid: board.grid(),
    state: board.state()
  })
},
newGame() {
  let mineArray = minesweeper.generateMineArray({
    rows: 8, cols: 8, mines: 12
  });
  var board = new minesweeper.Board(mineArray)
  this.setState({
    board: board,
    grid: board.grid(),
    state: board.state()
  })
},

setFlag(x,y) {
  return (e) => {
    e.preventDefault()
  const board = this.state.board
  board.cycleCellFlag(x,y)
    this.setState({
      grid: board.grid(),
      state: board.state()
    })
  }
},

render(){
  const determineCellState = (cell) => {
    if(this.state.state < 2) {
      if (cell.flag === 1){
        return {
          css: closedCss,
          text: '🏁'
        }
    }

    if (cell.state === 0) {
           return {
             css: closedCss,
             text: null
           }
         } else if (cell.state === 1 && !cell.isMine) {
           return {
             css: openCss,
             text: (cell.numAdjacentMines > 0) ? cell.numAdjacentMines.toString() : null
           }
         } else {
           return {
             css: openCss,
             text: (cell.state === 1 && cell.isMine) ? '💣' : null
           }
         }
       } else {
         return {
           css: openCss,
           text: cell.isMine ? '💣' : null
         }
       }
     }

     const td = (cell, i) => {
       const cellState = determineCellState(cell)
       return (
         <td
           style={cellState.css}
           key={i}
           onContextMenu={this.setFlag(cell.x, cell.y)}
           onClick={this.openCell(cell.x, cell.y)}>
           <center>{cellState.text}</center>
         </td>
       )
     }

     const tr = (row, i) => <tr key={i}>{mapIndex(td, row)}</tr>

     return (
       <div>
         <h1>MineSweeper</h1>
         {this.state.state === 2 ? <button onClick={this.newGame}>New Game?</button> : null }
         <div>{this.state.state}</div>
         <table>
           <tbody>
           {mapIndex(tr, this.state.grid)}
           </tbody>
         </table>
       </div>
     )
   }
 })
