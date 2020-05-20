import styles from "../../scss/flights/flightinfo.module.scss";
const Ships = ({ props }) => {
  return (
    <div className={styles.infoCard}>
      <h2>Ships</h2>
      <ul>
        {props.ships.map((ship) => {
          return <li>{ship}</li>;
        })}
      </ul>
    </div>
  );
};

export default Ships;
