import styles from "../../scss/flights/flightinfo.module.scss";
const LaunchSuccess = ({ props }) => {
  let launchSuccess;
  props.launch_success ? (launchSuccess = "Yes") : (launchSuccess = "No");
  return (
    <div className={styles.infoCard}>
      <h2>Launch Success</h2>
      <h3>{launchSuccess}</h3>
    </div>
  );
};

export default LaunchSuccess;
