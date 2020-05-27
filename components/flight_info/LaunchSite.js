import styles from "../../scss/flights/flightinfo.module.scss";
import LaunchSiteImg from "../../images/icons/launch.png";
const LaunchSite = ({ props }) => {
  return (
    <div className={styles.infoCard}>
      <div className={styles.infoHeader}>
        <img src={LaunchSiteImg} alt="icon" />
        <h2>Launch Site</h2>
      </div>
      <h3>{props.launch_site.site_name}</h3>
      <h3>{props.launch_site.site_name_long}</h3>
    </div>
  );
};

export default LaunchSite;
