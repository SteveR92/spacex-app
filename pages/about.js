import Layout from "../components/layout/Layout";
import styles from "../scss/about/about.module.scss";
import astronaut from "../images/astronaut.png";

const About = () => {
  return (
    <Layout>
      <div className={styles.aboutContainer}>
        <h2>About</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          laoreet mattis varius. Nullam id quam elit. Suspendisse eu quam eget
          mi ornare tincidunt. Mauris interdum quis ligula at euismod. Cras
          faucibus porta lorem, eget convallis tellus laoreet non. Quisque
          gravida turpis in ex ultrices, ut dignissim est hendrerit. Nam eu
          libero at sapien blandit tristique nec vel eros. Curabitur
          condimentum, diam in dictum euismod, arcu dolor aliquam tellus, quis
          gravida eros mi nec lacus. Vivamus ut nulla cursus, imperdiet dolor a,
          fringilla leo. Curabitur orci enim, euismod nec nisi et, tempus
          vehicula elit. Aliquam bibendum faucibus est sit amet semper. Nullam
          tristique est et iaculis molestie. Curabitur sit amet neque ut quam
          interdum aliquam a sit amet ante. Suspendisse ac ipsum vel quam
          volutpat congue. Morbi nec condimentum nunc. Nulla porta vehicula
          molestie.
        </p>
        <div className={styles.astroDiv}>
          <img src={astronaut} alt="astronaut" />
        </div>
      </div>
    </Layout>
  );
};
export default About;
