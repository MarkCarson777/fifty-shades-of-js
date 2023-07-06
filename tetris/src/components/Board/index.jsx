import { Cell } from "./components/Cell";

export function Board(props) {
  const { board } = props;

  return (
    <div>
      {board.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((cell, columnIndex) => (
            <Cell key={columnIndex} type={cell} />
          ))}
        </div>
      ))}
    </div>
  );
}
