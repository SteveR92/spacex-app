import styles from "../../scss/flights/flightinfo.module.scss";
import rocket_3 from "../../images/icons/rocket_3.png";
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
  if (typeof value == "object") {
    return "-";
  }
};

const getKeyValue = (value) => {
  let newVal = value.replace(/_/g, " ");
  newVal = newVal.split(" ");
  for (var i = 0, x = newVal.length; i < x; i++) {
    newVal[i] = newVal[i][0].toUpperCase() + newVal[i].substr(1);
  }
  return newVal.join(" ");
};

const FirstStage = ({ props }) => {
  let firstStage = props.rocket.first_stage.cores;
  return (
    <div className={styles.infoCard}>
      <div className={styles.infoHeader}>
        <img src={rocket_3} alt="icon" />
        <h2>First Stage</h2>
      </div>
      {firstStage.map((item, index) => {
        return (
          <ul>
            {Object.keys(item).map((key) => (
              <li key={index}>
                <span id={styles.key}>{getKeyValue(key)}: </span>
                {getValue(item[key])}
              </li>
            ))}
          </ul>
        );
      })}
    </div>
  );
};

export default FirstStage;
