import PastLaunches from "../components/buttons/pastLaunchesButton";
import UpcomingLaunches from "../components/buttons/upcomingLauncesButton";
import styles from "../scss/homepage/home.module.scss";
import Layout from "../components/layout/Layout";
export default function Home() {
  return (
    <Layout>
      <div
        className={styles.homeContainer}
        style={{
          backgroundImage: "url(" + `${require("../images/BG-BNW.png")}` + ")",
          width: "100%",
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className={styles.homeContents}>
          <div className={styles.homeContentsHeader}>
            <h2 className={styles.homeHeader}>
              Space<span>X</span> <div className={styles.pipeline}></div>{" "}
              <span>News</span>
            </h2>
          </div>
          <div className={styles.buttonContainer}>
            <UpcomingLaunches />
            <PastLaunches />
          </div>
          <div className={styles.homeMessage}>
            <p>
              Float through through Space X's past launches, gather all the
              intel and enjoy some stunning imagery. You can also be in the know
              about all upcoming launches with data supplied when made
              available.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
