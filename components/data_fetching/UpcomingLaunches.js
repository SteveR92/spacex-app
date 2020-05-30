import Link from "next/link";
import styles from "../../scss/flights/launches.module.scss";

const getValue = (value) => {
  if (typeof value == "string") {
    return value.slice(0, 10);
  }
  if (typeof value == object) {
    return "TBD";
  }
};

export const Launches = (props) => {
  return (
    <div>
      <table className={styles.table}>
        <th>Flight No.</th>
        <th>Flight</th>
        <th>Expected Launch*</th>

        {props.data.map((launch) => {
          console.log(launch);
          if (launch.upcoming) {
            return (
              <Link
                as={`/launches/${launch.flight_number}`}
                href={"/launches/[flight_number]"}
              >
                <tr className={styles.tr}>
                  <td className={styles.flightNumber}>
                    {launch.flight_number}
                  </td>
                  <td>{launch.mission_name}</td>
                  <td>{getValue(launch.launch_date_local)}</td>
                </tr>
              </Link>
            );
          }
        })}
      </table>
      <p>*Flight Schedule Subject to Change</p>
    </div>
  );
};
