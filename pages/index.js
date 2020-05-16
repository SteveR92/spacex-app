import Button from "../components/launchButton";
import styles from "../scss/home.module.scss";
import logo from "../images/spacex.png";
export default function Home() {
  return (
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
          <Button />
        </div>
        <div className={styles.homeMessage}>
          <p>
            Find out the latest from Space X's launches and other words that I
            need to write here will go here but for now I am just filling space
            because I can't be bothered to get Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
}
