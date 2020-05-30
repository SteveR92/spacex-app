import styles from "../../scss/flights/flightinfo.module.scss";
import rocket_2 from "../../images/icons/rocket_2.png";
import LaunchSuccess from "./LaunchSuccess";
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
      <p>
        <span id={styles.key}>Mission Name: </span>
        {props.mission_name}
      </p>
      <LaunchSuccess props={props} />
      <p>
        <span id={styles.key}>Launch Date: </span>
        {date}
      </p>
    </div>
  );
};

export default MissionName;
