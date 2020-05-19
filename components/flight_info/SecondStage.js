const SecondStage = ({ props }) => {
  let secondStage = props.rocket.second_stage.payloads[0];
  return (
    <div>
      <h2>Second Stage</h2>
      <h3>{secondStage.customers[0]}</h3>
      <h3>{secondStage.manufacturer}</h3>
      <h3>{secondStage.nationality}</h3>
    </div>
  );
};

export default SecondStage;
