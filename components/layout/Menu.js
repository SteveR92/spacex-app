import React from "react";
import {
  useState,
  useCallback,
  useRef,
  useEffect,
  useComponentVisible,
} from "react";
import styles from "../../scss/layout/menu.module.scss";

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
              <a href="/" className={styles.link}>
                Home
              </a>

              <a href="/upcoming_launches" className={styles.link}>
                Upcoming Launches
              </a>

              <a href="/past_launches" className={styles.link}>
                Past Launches
              </a>

              <a href="/about" className={styles.link}>
                About
              </a>
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
