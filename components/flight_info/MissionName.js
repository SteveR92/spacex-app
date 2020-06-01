import styles from "../../scss/flights/flightinfo.module.scss";
import rocket_2 from "../../images/icons/rocket_2.png";
import LaunchSuccess from "./LaunchSuccess";
const MissionName = ({ props }) => {
  let unixDate = props.launch_date_unix;
  const dateObj = new Date(unixDate * 1000);
  const date = JSON.stringify(dateObj).slice(1, 11);
  let youtubeLink = props.links.youtube_id;
  return (
    <div className={styles.infoCard}>
      <div className={styles.infoHeader}>
        <img src={rocket_2} alt="icon" />
        <h2>Mission</h2>
      </div>
      <p>
        <span id={styles.key}>Mission Name: </span>
        {props.mission_name}
      </p>
      <LaunchSuccess props={props} />
      <p>
        <span id={styles.key}>Launch Date: </span>
        {date}
      </p>
      <p>
        <span id={styles.key}>YouTube: </span>
        <a
          href={`https://www.youtube.com/watch?v=${youtubeLink}`}
          target="_blank"
        >
          External Link
        </a>
      </p>
    </div>
  );
};

export default MissionName;
