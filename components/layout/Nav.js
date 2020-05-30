import styles from "../../scss/layout/nav.module.scss";
import Link from "../../utils/Activelink";

const Nav = ({ href, children }) => {
  return (
    <div className={styles.nav}>
      <ul>
        <li>
          <Link activeClassName={styles.active} href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link activeClassName={styles.active} href="/past_launches">
            <a>Past Launches</a>
          </Link>
        </li>
        <li>
          <Link activeClassName={styles.active} href="/upcoming_launches">
            <a>Upcoming Launches</a>
          </Link>
        </li>
        <li>
          <Link activeClassName={styles.active} href="/">
            <a>Home</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
