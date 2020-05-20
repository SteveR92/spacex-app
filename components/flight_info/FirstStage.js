import styles from "../../scss/flights/flightinfo.module.scss";
const getValue = (value) => {
  if (typeof value == "string") {
    return value;
  }
  if (typeof value == "number") {
    return value;
  }
  if (typeof value == "boolean") {
    if (value) return "Yes";
    if (!value) return "No";
  }
};

const FirstStage = ({ props }) => {
  let firstStage = props.rocket.first_stage.cores;
  return (
    <div className={styles.infoCard}>
      <h2>First Stage</h2>
      {firstStage.map((item, index) => {
        return (
          <ul>
            {Object.keys(item).map((key) => (
              <li key={index}>
                {key}: {getValue(item[key])}
              </li>
            ))}
          </ul>
        );
      })}
    </div>
  );
};

export default FirstStage;
