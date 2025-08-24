import HRnet from "../../assets/HRnet.png";
import { NavLink, useLocation } from "react-router";
import styles from "./Navbar.module.css";

/**
 * Navbar component
 * Displays the application logo and navigation links.
 * Highlights navigation based on current route.
 *
 * @returns {JSX.Element} The rendered navigation bar
 */
export function Navbar() {
  const location = useLocation();
  const isOnEmployeePage = location.pathname === "/employee-list";

  return (
    <div className={styles.nav}>
      <NavLink to="/" className={styles.logoContainer}>
        <img src={HRnet} alt="HRnet" className={styles.logo} />
      </NavLink>
      <div className={styles.navContainer}>
        {isOnEmployeePage ? (
          <NavLink to="/" className={styles.navLink}>
            Create Employee
          </NavLink>
        ) : (
          <NavLink to="/employee-list" className={styles.navLink}>
            View Current Employees
          </NavLink>
        )}
      </div>
    </div>
  );
}
