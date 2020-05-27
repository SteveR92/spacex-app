import axios from "axios";
import styles from "../../scss/flights/flightnumber.module.scss";
import MissionName from "../../components/flight_info/MissionName";
import Rocket from "../../components/flight_info/Rocket";
import SecondStage from "../../components/flight_info/SecondStage";
import Orbit from "../../components/flight_info/Orbit";
import Ships from "../../components/flight_info/Ships";
import LaunchSite from "../../components/flight_info/LaunchSite";
import LaunchSuccess from "../../components/flight_info/LaunchSuccess";
import Details from "../../components/flight_info/Details";
import FirstStage from "../../components/flight_info/FirstStage";
import RocketImages from "../../components/flight_info/RocketImages";
export default ({ mission }) => {
  return (
    <div className={styles.infoGrid}>
      <div className={styles.topGroup}>
        <MissionName props={mission} />
        <Rocket props={mission} />
        <Ships props={mission} />
        {/* <LaunchSuccess props={mission} /> */}
      </div>

      <div className={styles.middleGroup}>
        <RocketImages props={mission} />
        <LaunchSite props={mission} />
        <Details props={mission} />
      </div>

      <div className={styles.bottomGroup}>
        <FirstStage props={mission} />
        <SecondStage props={mission} />
        <Orbit props={mission} />
      </div>
    </div>
  );
};

export const getServerSideProps = async (req) => {
  const res = await axios.get(
    `https://api.spacexdata.com/v3/launches/${req.params.flight_number}`
  );
  return { props: { mission: res.data } };
};
