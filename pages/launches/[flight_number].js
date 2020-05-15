import axios from "axios";
export default ({ mission }) => {
  console.log(mission);
  return (
    <div>
      <h2>LAUNCH!</h2>
      <div>
        <p>{mission.flight_number}</p>
        <p>{mission.mission_name}</p>
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
