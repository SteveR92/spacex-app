import styles from "../styles/home.module.css";
import Button from "../components/launchButton";
export default function Home() {
  return (
    <div className="home-container">
      <h2 className={styles.header}>Welcome To The Launch Pad</h2>
      <Button />
    </div>
  );
}
