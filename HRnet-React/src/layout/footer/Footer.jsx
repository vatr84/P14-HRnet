import styles from './Footer.module.css';

/**
 * Footer component
 * Displays the application name and description at the bottom of the page.
 *
 * @returns {JSX.Element} The rendered footer
 */
export function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.text}>HRnet</div>
      <div className={styles.text}>Employee Management System</div>
    </div>
  );
}
