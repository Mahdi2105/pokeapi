function Stats(props) {
  const { stats } = props;
  return (
    <div>
      <h4 className="sub-title">Stats</h4>
      <ul className="stats">
        {stats.map((stat) => {
          return (
            <li key={stat.stat.name} className="stat">
              {stat.stat.name} : {stat.base_stat}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Stats;
