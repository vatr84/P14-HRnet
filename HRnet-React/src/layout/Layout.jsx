import { Outlet } from "react-router";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
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
