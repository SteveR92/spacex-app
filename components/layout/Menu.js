import React from "react";
import {
  useState,
  useCallback,
  useRef,
  useEffect,
  useComponentVisible,
} from "react";
import styles from "../../scss/layout/menu.module.scss";
import Link from "../../utils/Activelink";

function Nav() {
  const [condition, setCondition] = useState(false);
  const useComponentVisible = (initialIsVisible) => {
    const [isComponentVisible, setIsComponentVisible] = useState(
      initialIsVisible
    );
    const ref = useRef(null);

    const handleClickOutside = (event) => {
      if (condition) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsComponentVisible(false);
          setCondition(!condition);
        }
      }
    };

    useEffect(() => {
      document.addEventListener("click", handleClickOutside, true);
      return () => {
        document.removeEventListener("click", handleClickOutside, true);
      };
    });

    return { ref, isComponentVisible, setIsComponentVisible };
  };
  const { ref, isComponentVisible } = useComponentVisible(true);

  //   const body = document.body;

  //   body.className = condition ? "menu-open" : "menu-closed";
  return (
    <div id={condition ? styles.menuToggled : styles.not_toggled}>
      <div className={styles.menu} ref={ref}>
        <div className={styles.navBar}>
          <div className={styles.navLinks}>
            <div
              className={
                condition ? styles.tagpopout_toggled : styles.tagpopout
              }
            >
              <Link activeClassName={styles.active} href="/">
                <a className={styles.link}>Home</a>
              </Link>

              <Link activeClassName={styles.active} href="/upcoming_launches">
                <a className={styles.link}>Upcoming Launches</a>
              </Link>

              <Link activeClassName={styles.active} href="/past_launches">
                <a className={styles.link}>Past Launches</a>
              </Link>

              <Link activeClassName={styles.active} href="/about">
                <a className={styles.link}>About</a>
              </Link>
            </div>
          </div>

          <div
            onClick={() => setCondition(!condition)}
            className={condition ? styles.burgerToggled : styles.burger}
          >
            <div className={styles.bar1}></div>
            <div className={styles.bar2}></div>
            <div className={styles.bar3}></div>
          </div>
        </div>
      </div>
      <div
        className={condition ? "shadow-content-container" : "no-shadow"}
      ></div>
    </div>
  );
}

export default Nav;
