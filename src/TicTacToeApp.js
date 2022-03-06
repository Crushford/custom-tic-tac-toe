import { Client } from "boardgame.io/react";
import { Board } from "./Board/Board";
import { TicTacToe } from "./Game/Game";

export const customGame = ({ rows, columns }) =>
  Client({
    game: TicTacToe(rows, columns),
    board: Board
  });
