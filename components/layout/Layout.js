import Head from "next/head";
import Nav from "./Nav";
import Menu from "./Menu";
import styles from "../../scss/layout/layout.module.scss";
const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <meta
          name="Space X App"
          content="Find data on forthcoming and previous Space X missions."
        />
      </Head>
      <header>
        <div className={styles.menu}>
          <Menu />
        </div>
        <div className={styles.nav}>
          <Nav />
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
