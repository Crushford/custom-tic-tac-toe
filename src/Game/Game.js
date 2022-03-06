import { INVALID_MOVE } from "boardgame.io/core";

import { IsDraw, IsVictory } from "./EndgameConditions";

export const TicTacToe = (numberOfRows, numberOfColumns) => ({
  setup: () => {
    debugger;
    return {
      cells: Array(numberOfRows).fill(Array(numberOfColumns).fill(null))
    };
  },
  moves: {
    clickCell: (G, ctx, row, column) => {
      if (G.cells[row][column] === null) {
        G.cells[row][column] = ctx.currentPlayer;
      } else {
        console.log("you dumb");
        return INVALID_MOVE;
      }
    }
  },
  turn: {
    minMoves: 1,
    maxMoves: 1
  },
  endIf: (G, ctx) => {
    if (IsVictory(G.cells)) {
      return { winner: ctx.currentPlayer };
    }
    if (IsDraw(G.cells)) {
      return { draw: true };
    }
  }
});
