import { useState } from "react";
import { CustomTicTacToe } from "./CustomTicTacToe";

const App = () => {
  const [numberOfRows, setNumberOfRows] = useState(null);
  const [numberOfColumns, setNumberOfColumns] = useState(null);
  const [gameReady, setGameReady] = useState(false);

  const rowsChangeHandler = (e) => {
    setNumberOfRows(e.target.value);
  };
  const coloumnsChangeHandler = (e) => {
    setNumberOfColumns(e.target.value);
  };

  return (
    <div>
      {gameReady ? (
        <CustomTicTacToe rows={numberOfRows} columns={numberOfColumns} />
      ) : (
        <div>
          <h1>Welcome to custom Tic Tac Toe</h1>
          <p>Please select your game options</p>
          <label for="column-input">Number of columns</label>
          <input
            type="number"
            id="column-input"
            min="3"
            max="10"
            onChange={coloumnsChangeHandler}
          />
          <br /> <br />
          <label for="rows-input">Number of rows</label>
          <input
            type="number"
            id="rows-input"
            onChange={rowsChangeHandler}
            min="3"
            max="10"
          />
          <br />
          <br />
          {numberOfRows ? (
            <h2>
              You have selected {numberOfRows} rows & {numberOfColumns} columns
            </h2>
          ) : (
            <p>please select rows</p>
          )}
          <br />
          <br />
          <button onClick={() => setGameReady(true)}>start game</button>{" "}
        </div>
      )}
    </div>
  );
};

export default App;
