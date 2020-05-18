import styles from "../scss/launchButton.module.scss";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
console.log(useRouter);
const LaunchSequence = (props) => {
  const [launched, setLaunched] = useState(false);
  const [index, setIndex] = useState(0);
  const launchArray = ["Launch", 5, 4, 3, 2, 1, "Lift Off!"];

  const launchSequenceFn = () => {
    if (index < 6) {
      setInterval(() => {
        setIndex(index + 1);
      }, 1000);
    }
  };

  useEffect(() => {
    if (props.props) {
      launchSequenceFn();
      setLaunched(true);
    }
  });
  return (
    <h2
      className={styles.launchMessage}
      id={launched ? `${styles.launchMessage}` : ""}
    >
      {launchArray[index]}
    </h2>
  );
};

export default LaunchSequence;
