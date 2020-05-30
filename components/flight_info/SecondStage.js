import styles from "../../scss/flights/flightinfo.module.scss";
import second_stage from "../../images/icons/second_stage.png";
const SecondStage = ({ props }) => {
  let secondStage = props.rocket.second_stage.payloads[0];
  return (
    <div className={styles.infoCard}>
      <div className={styles.infoHeader}>
        <img src={second_stage} alt="icon" />
        <h2>Second Stage</h2>
      </div>
      <p>
        <span id={styles.key}>Nationality: </span> {secondStage.nationality}
      </p>
      <p>
        <span id={styles.key}>Customers: </span> {secondStage.customers[0]}
      </p>
      <p>
        <span id={styles.key}>Manufacturer: </span>
        {secondStage.manufacturer}
      </p>
      <p>
        <span id={styles.key}>Payload: </span>
        {secondStage.payload_type}
      </p>
      <p>
        <span id={styles.key}>Payload Mass: </span>
        {secondStage.payload_mass_kg} KG
      </p>
    </div>
  );
};

export default SecondStage;
