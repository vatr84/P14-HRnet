import PropTypes from 'prop-types';
import styles from './SelectInput.module.css';

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