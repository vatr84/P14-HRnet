import PropTypes from 'prop-types';
import styles from './SelectInput.module.css';

/**
 * SelectInput component
 * Renders a styled select dropdown with options and a placeholder.
 *
 * @param {Object} props - Component props
 * @param {string} props.id - The id for the select element
 * @param {string} props.value - The current selected value
 * @param {function} props.onChange - Callback for value change
 * @param {Array<{abbreviation: string, name: string}>} props.options - Array of option objects
 * @param {string} [props.placeholder] - Placeholder text for the select
 * @param {boolean} [props.required] - Whether the field is required
 * @returns {JSX.Element} The rendered select input
 */
export function SelectInput({
  id,
  value,
  onChange,
  options,
  placeholder = "Select an option",
  required = false
}) {
  return (
    <select
      id={id}
      value={value}
      onChange={onChange}
      required={required}
      aria-required={required.toString()}
      className={styles.selectInput}
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option.abbreviation} value={option.abbreviation}>
          {option.name}
        </option>
      ))}
    </select>
  );
}

/**
 * PropTypes for SelectInput
 * @type {object}
 */
SelectInput.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      abbreviation: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool
};