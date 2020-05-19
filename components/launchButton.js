import { fetchMissions } from "../store/actions/postAction";
import { useDispatch, useSelector } from "react-redux";

import Link from "next/link";
import styles from "../scss/launchButton.module.scss";
import LaunchSequence from "./launchSequence";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Button = ({ href }) => {
  const router = useRouter();
  const [launch, isLaunching] = useState(false);
  const [launchStyle, setLaunchStyle] = useState(false);

  // const goForLaunch = () => {
  //   isLaunching(true);
  //   setLaunchStyle(true);
  //   setInterval(() => {
  //     router.push("/launch_news");
  //   }, 6500);
  // };

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchMissions());
  // }, []);

  return (
    // <div className={styles.buttonContainer}>
    //   <div
    //     className={styles.buttonBackground}
    //     id={launchStyle ? `${styles.launchedBackground}` : "no-launch"}
    //   ></div>

    //   <div
    //     href={href}
    //     className={styles.launchButton}
    //     onClick={goForLaunch}
    //     id={launchStyle ? `${styles.launched}` : "no-launch"}
    //   ></div>
    //   {/* <LaunchSequence props={launch} /> */}
    // </div>
    <Link href="/launch_news">
      <button>Launch</button>
    </Link>
  );
};

export default Button;
