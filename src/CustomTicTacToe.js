import { customGame } from "./TicTacToeApp";
export const CustomTicTacToe = ({ rows, columns }) => {
  debugger;
  const TicTacToe = customGame(rows, columns);

  return <TicTacToe />;
};
