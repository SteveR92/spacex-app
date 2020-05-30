import styles from "../../scss/flights/flightinfo.module.scss";
import rocket_3 from "../../images/icons/rocket_2.png";
import LaunchSuccess from "./LaunchSuccess";
const getValue = (value) => {
  if (typeof value == "string") {
    return value;
  }
  if (typeof value == "number") {
    return value;
  }
  if (typeof value == "boolean") {
    if (value) return "Yes";
    if (!value) return "No";
  }
};
const Rocket = ({ props }) => {
  return (
    <div className={styles.infoCard}>
      <div className={styles.infoHeader}>
        <img src={rocket_3} alt="icon" />
        <h2>Rocket</h2>
      </div>
      <p>
        <span id={styles.key}>Flight Number: </span>
        {props.flight_number}
      </p>
      <p>
        <span id={styles.key}>Rocket: </span>
        {props.rocket.rocket_name}
      </p>
      <p>
        <span id={styles.key}>Rocket Type: </span>
        {props.rocket.rocket_type}
      </p>
    </div>
  );
};

export default Rocket;
