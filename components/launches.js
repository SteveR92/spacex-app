import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../scss/launches.module.scss";
export const Launches = (props) => {
  const [propsData, setPropsData] = useState(() => props);

  useEffect(() => {
    localStorage.setItem("props", JSON.stringify(propsData));
  }, []);
  return (
    <div>
      {props.data.map((launch) => {
        return (
          <Link
            as={`/launches/${launch.flight_number}`}
            href={"/launches/[flight_number]"}
          >
            <div className={styles.flightCard}>
              {launch.mission_name}
              <br />
              {launch.launch_year}
            </div>
          </Link>
        );
      })}
    </div>
  );
};
