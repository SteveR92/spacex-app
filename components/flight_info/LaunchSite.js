import styles from "../../scss/flights/flightinfo.module.scss";
import LaunchSiteImg from "../../images/icons/launch.png";
const LaunchSite = ({ props }) => {
  return (
    <div className={styles.infoCard}>
      <div className={styles.infoHeader}>
        <img src={LaunchSiteImg} alt="icon" />
        <h2>Launch Site</h2>
      </div>
      <p>
        <span id={styles.key}>Launch Site: </span>
        {props.launch_site.site_name}
      </p>
      <p>
        <span id={styles.key}>Site Name: </span>
        {props.launch_site.site_name_long}
      </p>
    </div>
  );
};

export default LaunchSite;
