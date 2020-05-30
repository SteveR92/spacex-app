import Link from "next/link";
import icon from "../../images/icons/rocket_1_w.png";
import styles from "../../scss/utils/button.module.scss";

const Button = () => {
  return (
    <div>
      <Link href="/upcoming_launches">
        <div className={styles.button}>
          <img src={icon} alt="icon" />
          <button className={`${styles.btn} ${styles.draw_border}`}>
            Upcoming Launches
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Button;
