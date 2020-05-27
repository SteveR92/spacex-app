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
      </div>
      <h3>{props.rocket.rocket_name}</h3>
      <LaunchSuccess props={props} />
    </div>
  );
};

export default Rocket;
