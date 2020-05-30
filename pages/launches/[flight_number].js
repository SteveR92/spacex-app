import axios from "axios";
import styles from "../../scss/flights/flightnumber.module.scss";
import MissionName from "../../components/flight_info/MissionName";
import Rocket from "../../components/flight_info/Rocket";
import SecondStage from "../../components/flight_info/SecondStage";
import Orbit from "../../components/flight_info/Orbit";
import Ships from "../../components/flight_info/Ships";
import LaunchSite from "../../components/flight_info/LaunchSite";
import Details from "../../components/flight_info/Details";
import FirstStage from "../../components/flight_info/FirstStage";
import RocketImages from "../../components/flight_info/RocketImages";
import Layout from "../../components/layout/Layout";
export default ({ mission }) => {
  console.log({ mission });
  return (
    <Layout>
      <div className={styles.infoGrid}>
        <div className={styles.topGroup}>
          <MissionName props={mission} />
          <Rocket props={mission} />
          <Ships props={mission} />
          {/* <LaunchSuccess props={mission} /> */}
        </div>

        <div className={styles.middleGroup}>
          <LaunchSite props={mission} />
          <Details props={mission} />
          <FirstStage props={mission} />
        </div>

        <div className={styles.bottomGroup}>
          <SecondStage props={mission} />
          <Orbit props={mission} />
          <RocketImages props={mission} />
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps = async (req) => {
  const res = await axios.get(
    `https://api.spacexdata.com/v3/launches/${req.params.flight_number}`
  );
  return { props: { mission: res.data } };
};
