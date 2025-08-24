import { Outlet } from "react-router";
import { Footer } from "./footer/Footer";
import { Navbar } from "./navbar/Navbar";
import styles from "./Layout.module.css";

/**
 * Layout component
 * Provides the main page structure with Navbar, Footer, and routed content.
 *
 * @returns {JSX.Element} The rendered layout structure
 */
function Layout() {
  return (
    <div className={styles.layout}>
      {/* Navbar at the top of the page */}
      <Navbar />
      {/* Main content area for routed pages */}
      <main className={styles.main}>
        <Outlet />
      </main>
      {/* Footer at the bottom of the page */}
      <Footer />
    </div>
  );
}

export { Layout };
