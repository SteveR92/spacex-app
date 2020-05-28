import styles from "../../scss/layout/nav.module.scss";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <ul>
        <a href="/about">
          <li>About</li>
        </a>
        <a href="/past_launches">
          <li>Past Launches</li>
        </a>
        <a href="/upcoming_launches">
          <li>Upcoming Launches</li>
        </a>
        <a href="/">
          <li>Home</li>
        </a>
      </ul>
    </div>
  );
};

export default Nav;
