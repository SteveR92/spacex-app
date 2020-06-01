import Layout from "../components/layout/Layout";
import styles from "../scss/about/about.module.scss";
import astronaut from "../images/astronaut.png";

const About = () => {
  return (
    <Layout>
      <div className={styles.aboutContainer}>
        <h2>About</h2>
        <p>
          Welcome to my SpaceX application and thanks for checking the about
          page. This application was made with the fantastic SpaceX API and
          built with Next.JS, Redux and SASS. I also designed the application
          initially in Figma. The images have been licensed from Adobe Stock. If
          you are interested in seeing the code for this application check out
          the repo{" "}
          <a href="https://github.com/SteveR92/spacex-app" target="_blank">
            here
          </a>
          .
        </p>
        <div className={styles.astroDiv}>
          <img src={astronaut} alt="astronaut" />
        </div>
      </div>
    </Layout>
  );
};
export default About;
