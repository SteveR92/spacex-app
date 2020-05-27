import styles from "../../scss/flights/flightinfo.module.scss";
import details from "../../images/icons/details.png";
const getValue = (value) => {
  if (typeof value == "string") {
    return value;
  }
  if (typeof value == "object") {
    return "No Information Available.";
  }
};

const Details = ({ props }) => {
  console.log(props);
  return (
    <div className={styles.infoCard}>
      <div className={styles.infoHeader}>
        <img src={details} alt="details icon" id={styles.iconImage} />
        <h2>Details</h2>
      </div>
      <p>{getValue(props.details)}</p>
    </div>
  );
};

export default Details;
