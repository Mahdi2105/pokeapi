function Abilities(props) {
  const { abilities } = props;
  return (
    <div>
      <h4 className="sub-title">Abilities</h4>
      <ul className="abilities">
        {abilities.map((ability) => {
          return (
            <li key={ability.ability.name + ability.slot} className="ability">
              {ability.ability.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Abilities;
