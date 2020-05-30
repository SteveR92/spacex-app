import styles from "../../scss/flights/flightinfo.module.scss";
const getValue = (value) => {
  if (typeof value == "boolean") {
    if (value) return "Launch Successful";
    if (!value) return "Launch Failed";
  }
};
const LaunchSuccess = ({ props }) => {
  return <p>{getValue(props.launch_success)}</p>;
};

export default LaunchSuccess;
