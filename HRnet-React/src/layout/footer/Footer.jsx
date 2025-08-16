import styles from './Footer.module.css';

export function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.text}>HRnet</div>
      <div className={styles.text}>Employee Management System</div>
    </div>
  );
}
