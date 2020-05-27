import styles from "../../scss/flights/flightinfo.module.scss";
import ship from "../../images/icons/ships.png";
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
  if (typeof value == "object") {
    return "-";
  }
};

const Ships = ({ props }) => {
  return (
    <div className={styles.infoCard}>
      <div className={styles.infoHeader}>
        <img src={ship} alt="icon" />
        <h2>Ships</h2>
      </div>
      <ul>
        {props.ships.map((ship) => {
          return <li>{getValue(ship)}</li>;
        })}
      </ul>
    </div>
  );
};

export default Ships;
