function Moves(props) {
  const { moves } = props;
  return (
    <div>
      <h4 className="sub-title">Moves</h4>
      <ul className="moves">
        {moves.map((move) => {
          return (
            <div key={move.move.name} className="move">
              <li>{move.move.name}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Moves;
