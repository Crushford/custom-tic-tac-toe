import { INVALID_MOVE } from "boardgame.io/core";

import { IsDraw, IsVictory } from "./EndgameConditions";

export const TicTacToe = (numberOfRows, numberOfColumns) => ({
  setup: () => {
    return {
      cells: Array(parseInt(numberOfRows, 10)).fill(
        Array(parseInt(numberOfColumns, 10)).fill(null)
      )
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
  },
  ai: {
    enumerate: (G, ctx) => {
      let moves = [];
      for (let i = 0; i < G.cells.length; i++) {
        for (let j = 0; j < G.cells[0].length; j++) {
          if (G.cells[i][j] === null) {
            moves.push({ move: "clickCell", args: [i, j] });
          }
        }
      }
      return moves;
    }
  }
});
