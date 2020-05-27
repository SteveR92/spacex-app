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
      <h3>{orbit.orbit_params.reference_system}</h3>
      <h3>{orbit.orbit_params.regime}</h3>
      <h3>{orbit.lifespan_years}</h3>
    </div>
  );
};

export default Orbit;
