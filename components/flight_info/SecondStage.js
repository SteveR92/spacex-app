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
      <h3>Nationality: {secondStage.nationality}</h3>
      <h3>Customers: {secondStage.customers[0]}</h3>
      <h3>Manufacturer: {secondStage.manufacturer}</h3>
      <h3>Payload: {secondStage.payload_type}</h3>
      <h3>Mass: {secondStage.payload_mass_kg} KG</h3>
    </div>
  );
};

export default SecondStage;
