import styles from "../../scss/flights/flightinfo.module.scss";
const Orbit = ({ props }) => {
  let orbit = props.rocket.second_stage.payloads[0];
  return (
    <div className={styles.infoCard}>
      <h2>Orbit</h2>
      <h3>{orbit.orbit_params.reference_system}</h3>
      <h3>{orbit.orbit_params.regime}</h3>
    </div>
  );
};

export default Orbit;
