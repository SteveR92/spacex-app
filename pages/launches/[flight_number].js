import axios from "axios";
export default ({ mission }) => {
  console.log(mission.rocket.second_stage.payloads);
  let secondStage = mission.rocket.second_stage.payloads[0];
  return (
    <div>
      <h2>LAUNCH!</h2>
      <div>
        <p>{mission.flight_number}</p>
        <p>{mission.mission_name}</p>
        <p>{secondStage.payload_type}</p>
        <p>{secondStage.orbit_params.reference_system} Orbit</p>
        <p>{secondStage.nationality}</p>
      </div>
    </div>
  );
};

export const getServerSideProps = async (req) => {
  const res = await axios.get(
    `https://api.spacexdata.com/v3/launches/${req.params.flight_number}`
  );
  return { props: { mission: res.data } };
};
