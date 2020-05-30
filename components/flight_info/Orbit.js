import styles from "../../scss/flights/flightinfo.module.scss";
import orbitImg from "../../images/icons/orbit.png";
const Orbit = ({ props }) => {
  let orbit = props.rocket.second_stage.payloads[0];
  return (
    <div className={styles.infoCard}>
      <div className={styles.infoHeader}>
        <img src={orbitImg} alt="icon" />
        <h2>Orbit</h2>
      </div>
      <p>
        <span id={styles.key}> Orbit: </span>
        {orbit.orbit_params.reference_system}
      </p>
      <p>
        <span id={styles.key}>Orbit Regime: </span>
        {orbit.orbit_params.regime}
      </p>
      <p>
        <span id={styles.key}>Orbit Lifespan in Years: </span>
        {orbit.lifespan_years}
      </p>
    </div>
  );
};

export default Orbit;
