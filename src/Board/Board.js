import "./style.css";

export const Board = ({ ctx, G, moves }) => {
  const clickCell = (row, column) => {
    moves.clickCell(row, column);
  };

  return (
    <div>
      {G.cells.map((item, rowIndex) => {
        return (
          <div className="row" key={rowIndex}>
            {item.map((cell, columnIndex) => (
              <div
                className="cell"
                onClick={() => clickCell(rowIndex, columnIndex)}
                key={`${rowIndex} - ${columnIndex}`}
              >
                {cell}
              </div>
            ))}
          </div>
        );
      })}

      {ctx.gameover && (
        <h2>You suck player {ctx.gameover.winner == 0 ? 0 : 1}</h2>
      )}
    </div>
  );
};
