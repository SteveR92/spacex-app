import styles from "../../scss/flights/flightinfo.module.scss";
import rocket_2 from "../../images/icons/rocket_2.png";
const MissionName = ({ props }) => {
  let unixDate = props.launch_date_unix;
  const dateObj = new Date(unixDate * 1000);
  const date = JSON.stringify(dateObj).slice(1, 11);
  return (
    <div className={styles.infoCard}>
      <div className={styles.infoHeader}>
        <img src={rocket_2} alt="icon" />
        <h2>Mission</h2>
      </div>
      <h2>{props.flight_number}</h2>
      <h2>{props.mission_name}</h2>
      <h2>{date}</h2>
    </div>
  );
};

export default MissionName;
