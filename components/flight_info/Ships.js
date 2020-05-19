const Ships = ({ props }) => {
  return (
    <div>
      <h2>Ships</h2>
      <ul>
        {props.ships.map((ship) => {
          return <li>{ship}</li>;
        })}
      </ul>
    </div>
  );
};

export default Ships;
