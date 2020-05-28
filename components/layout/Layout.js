import Head from "next/head";
import Nav from "./Nav";

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
        <Nav />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
