import styles from "../../scss/flightinfo.module.scss";
const Rocket = ({ props }) => {
  return (
    <div className={styles.infoCard}>
      <h2>Rocket First Stage</h2>
      <h3>{props.rocket.rocket_name}</h3>
    </div>
  );
};

export default Rocket;
