import styles from "../../scss/flights/flightinfo.module.scss";
const getValue = (value) => {
  if (typeof value == "boolean") {
    if (value) return "Successful";
    if (!value) return "Failed";
  }
};
const LaunchSuccess = ({ props }) => {
  return (
    <p>
      <span id={styles.key}>Launch: </span>
      {getValue(props.launch_success)}
    </p>
  );
};

export default LaunchSuccess;
