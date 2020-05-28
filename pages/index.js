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
          backgroundImage:
            "url(" + `${require("../images/background-1.jpg")}` + ")",
          width: "100%",
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className={styles.homeContents}>
          <h2 className={styles.homeHeader}>SpaceX News</h2>
          <div className={styles.buttonContainer}>
            <UpcomingLaunches />
            <PastLaunches />
          </div>
          <div className={styles.homeMessage}>
            <p>
              Find out the latest from Space X's launches and other words that I
              need to write here will go here but for now I am just filling
              space because I can't be bothered to get Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
