export const PUT_SYMBOL = 'PUT_SYMBOL'

export default (board, xIsNext) => {
  return {
    type: PUT_SYMBOL,
    payload: {
      board,
      xIsNext
    }
  }
}
