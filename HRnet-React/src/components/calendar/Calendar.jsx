import PropTypes from 'prop-types';
import styles from './Calendar.module.css';

/**
 * Calendar component
 * Renders a styled date input field.
 *
 * @param {Object} props - Component props
 * @param {string} props.id - The id for the input element
 * @param {string} props.value - The current date value (YYYY-MM-DD)
 * @param {function} props.onChange - Callback for value change
 * @param {boolean} [props.required] - Whether the field is required (default: true)
 * @returns {JSX.Element} The rendered date input
 */
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

/**
 * PropTypes for Calendar
 * @type {object}
 */
Calendar.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool
};
