import styles from "../../scss/flights/flightinfo.module.scss";

const Details = ({ props }) => {
  console.log(props);
  return (
    <div className={styles.infoCard}>
      <h2>Details</h2>
      <p>{props.details}</p>
    </div>
  );
};

export default Details;
