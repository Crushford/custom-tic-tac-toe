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

export const IsVictory = (cells) => {
  console.log("checking for winner");
  for (let i = 0; i < cells.length; i++) {
    if (
      (cells[i][0] !== null &&
        cells[i][0] === cells[i][1] &&
        cells[i][1] === cells[i][2]) ||
      (cells[0][i] !== null &&
        cells[0][i] === cells[1][i] &&
        cells[1][i] === cells[2][i])
    ) {
      return true;
    }
  }

  if (
    (cells[0][0] !== null &&
      cells[0][0] === cells[1][1] &&
      cells[1][1] === cells[2][2]) ||
    (cells[0][2] !== null &&
      cells[0][2] === cells[1][1] &&
      cells[1][1] === cells[2][0])
  ) {
    return true;
  }
};
