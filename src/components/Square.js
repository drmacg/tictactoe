import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import putSymbol from '../actions/play'

class Square extends PureComponent {

  handleClick() {
    var number = this.props.value
    var board = this.props.game.board
    var xIsNext = this.props.game.xIsNext

    if (board[number] === null) {
      board[number] = this.props.game.xIsNext ? "X" : "O";
      xIsNext = !xIsNext
    }
    this.props.putSymbol(board, xIsNext)


  }
  render () {
    return (
      <button className="square" onClick={this.handleClick.bind(this)}>
        {this.props.game.board[this.props.value]}
      </button>
    );
  }
}

const mapStateToProps = ({ game }) => ({
  game
})

export default connect(mapStateToProps, { putSymbol })(Square)
