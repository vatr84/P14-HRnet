import styles from "./NotFound.module.css";

export function NotFound() {
  return (
    <div className={styles.container}>
      <span className={styles.notFoundText}>404 Not Found</span>
    </div>
  );
}

