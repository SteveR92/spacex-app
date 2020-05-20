import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../../scss/flights/launches.module.scss";

const getValue = (value) => {
  if (typeof value == "string") {
    return value.slice(0, 10);
  }
  if (value == null) {
    return "TBD";
  }
};

export const Launches = (props) => {
  const [propsData, setPropsData] = useState(() => props);

  useEffect(() => {
    localStorage.setItem("props", JSON.stringify(propsData));
  }, []);
  return (
    <div>
      {props.data.map((launch) => {
        console.log(launch);
        if (launch.upcoming) {
          return (
            <Link
              as={`/launches/${launch.flight_number}`}
              href={"/launches/[flight_number]"}
            >
              <div className={styles.flightCard}>
                {launch.mission_name}
                <br />
                {getValue(launch.last_ll_launch_date)}
              </div>
            </Link>
          );
        }
      })}
    </div>
  );
};
