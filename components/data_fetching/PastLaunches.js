import Link from "next/link";
import styles from "../../scss/flights/launches.module.scss";

const getValue = (value) => {
  if (typeof value == "string") {
    return value.slice(0, 10);
  }
  if (typeof value == "boolean") {
    if (!value) {
      return "No";
    }
    if (value) {
      return "Yes";
    }
  }
};

export const Launches = (props) => {
  return (
    <div>
      <table className={styles.table}>
        <th></th>
        <th>No.</th>
        <th>Flight</th>
        <th>Launch</th>
        <th>Successful?</th>
        {props.data.map((launch) => {
          if (!launch.upcoming) {
            return (
              <Link
                as={`/launches/${launch.flight_number}`}
                href={"/launches/[flight_number]"}
              >
                <tr className={styles.tr}>
                  <td>
                    <div className={styles.imageContainer}>
                      <img
                        src={launch.links.flickr_images[0]}
                        alt="rocket image"
                        className={styles.tableImage}
                      />
                    </div>
                  </td>
                  <td className={styles.flightNumber}>
                    {launch.flight_number}
                  </td>
                  <td>{launch.mission_name}</td>
                  <td>{getValue(launch.launch_date_local)}</td>
                  <td>{getValue(launch.launch_success)}</td>
                </tr>
              </Link>
            );
          }
        })}
      </table>
    </div>
  );
};
