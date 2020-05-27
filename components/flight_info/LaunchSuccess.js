import styles from "../../scss/flights/flightinfo.module.scss";
const getValue = (value) => {
  if (typeof value == "boolean") {
    if (value) return "Launch Successful";
    if (!value) return "Launch Failed";
  }
};
const LaunchSuccess = ({ props }) => {
  return (
    <div className={styles.infoCard}>
      <h3>{getValue(props.launch_success)}</h3>
    </div>
  );
};

export default LaunchSuccess;
