import PropTypes from 'prop-types';
import styles from './Calendar.module.css';

export function Calendar({ id, value, onChange, required = true }) {
  return (
    <input
      id={id}
      type="date"
      value={value}
      onChange={onChange}
      required={required}
      aria-required="true"
      className={styles.calendarInput}
    />
  );
}

Calendar.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool
};
