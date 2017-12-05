import { PUT_SYMBOL } from '../actions/play'

const game = {
  board: Array(9).fill(null),
  xIsNext: true,
  winner: ""
}

export default (state = game, { type, payload } = {}) => {
  switch (type) {
    case PUT_SYMBOL:
      var newState = Object.assign({}, state);
      newState.board = payload.board;
      newState.xIsNext = payload.xIsNext;
      state = newState
    default:
      return state
  }
}
