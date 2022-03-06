export const IsDraw = (cells) => {
  for (let i = 0; i < cells.length; i++) {
    for (let j = 0; j < cells[i].length; j++) {
      if (cells[i][j] === null) {
        return false;
      }
    }
  }
  return true;
};

const checkRow = (cells, row, column) =>
  cells[row + 1] &&
  cells[row][column] === cells[row + 1][column] &&
  cells[row + 2] &&
  cells[row][column] === cells[row + 2][column];

const checkColoumn = (cells, row, column) =>
  cells[row][column] === cells[row][column + 1] &&
  cells[row][column] === cells[row][column + 2];

const checkDiagnal = (cells, row, column) =>
  (cells[row + 1] &&
    cells[row][column] === cells[row + 1][column + 1] &&
    cells[row + 2] &&
    cells[row][column] === cells[row + 2][column + 2]) ||
  (cells[row - 1] &&
    cells[row][column] === cells[row - 1][column + 1] &&
    cells[row - 2] &&
    cells[row][column] === cells[row - 2][column + 2]);

const checkCell = (cells, row, column) => {
  if (cells[row][column] !== null) {
    if (
      checkRow(cells, row, column) ||
      checkColoumn(cells, row, column) ||
      checkDiagnal(cells, row, column)
    )
      return true;
  }
};

export const IsVictory = (cells) => {
  for (let i = 0; i < cells.length; i++) {
    for (let j = 0; j < cells[0].length; j++) {
      if (checkCell(cells, i, j)) return true;
    }
  }
};
