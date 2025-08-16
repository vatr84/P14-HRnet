import { Outlet } from "react-router";
import { Footer } from "./footer/Footer";
import { Navbar } from "./navbar/Navbar";
import styles from "./Layout.module.css";

function Layout() {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export { Layout };
