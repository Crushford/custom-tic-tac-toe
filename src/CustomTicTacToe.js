import { customGame } from "./TicTacToeApp";
export const CustomTicTacToe = ({ rows, columns }) => {
  const TicTacToe = customGame(rows, columns);

  return <TicTacToe />;
};
