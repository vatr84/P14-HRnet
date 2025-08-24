import styles from "./NotFound.module.css";

/**
 * NotFound page component
 * Displays a 404 error message when a route is not found.
 *
 * @returns {JSX.Element} The rendered not found page
 */
export function NotFound() {
  return (
    <div className={styles.container}>
      <span className={styles.notFoundText}>404 Not Found</span>
    </div>
  );
}

