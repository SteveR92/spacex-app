import Link from "next/link";
import styles from "../styles/launch.module.scss";
export const Launches = (props) => {
  //   console.log("rocket", props.data[0].rocket.second_stage.payloads);

  return (
    <div>
      {props.data.map((launch) => {
        return (
          <Link
            as={`/launches/${launch.flight_number}`}
            href={"/launches/[flight_number]"}
          >
            <div className={styles.launchCard}>
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
