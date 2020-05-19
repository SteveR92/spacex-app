const MissionName = ({ props }) => {
  let unixDate = props.launch_date_unix;
  const dateObj = new Date(unixDate * 1000);
  const date = JSON.stringify(dateObj).slice(1, 11);
  return (
    <div>
      <h2>{props.flight_number}</h2>
      <h2>{props.mission_name}</h2>
      <h2>{date}</h2>
    </div>
  );
};

export default MissionName;
