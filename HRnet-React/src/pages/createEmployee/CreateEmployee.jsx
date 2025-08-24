import { states } from "../../data/states";
import { departments } from "../../data/departments";
import { useState, memo } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../../store/employeesSlice";
import Modal from "vatr84-modal-component";
import { Calendar } from "../../components/calendar/Calendar";
import { SelectInput } from "../../components/selectInput/SelectInput";
import styles from "./CreateEmployee.module.css";

/**
 * CreateEmployee page component
 * Renders a form for creating a new employee and handles form submission.
 * Uses Redux for state management and displays a modal on success.
 *
 * @returns {JSX.Element} The rendered create employee page
 */
function CreateEmployee() {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    startDate: "",
    department: "",
    birthDate: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });

  /**
   * Handles input changes for all form fields
   * @param {React.ChangeEvent<HTMLInputElement|HTMLSelectElement>} e - The change event
   */
  const handleChange = e => {
    const { id, value } = e.target;
    setEmployee({ ...employee, [id]: value });
  };

  /**
   * Handles form submission, dispatches addEmployee action, and opens modal
   * @param {React.FormEvent<HTMLFormElement>} e - The form submit event
   */
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      addEmployee({
        ...employee,
        id: Date.now().toString(),
      })
    );
    setIsModalOpen(true);
  };

  /**
   * Closes the modal and resets the employee form
   */
  const closeModal = () => {
    setIsModalOpen(false);
    setEmployee({
      firstName: "",
      lastName: "",
      startDate: "",
      department: "",
      birthDate: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
    });
  };

  const fullName = `${employee.firstName} ${employee.lastName}`.trim();
  const successMessage = fullName
    ? `${fullName} has been added successfully to the employees.`
    : `Employee has been created successfully.`;

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>Create Employee</h1>
      {/* Employee creation form with validation and accessibility features */}
      <form
        className={styles.form}
        onSubmit={handleSubmit}
        aria-labelledby="form-heading"
      >
        <h2 id="form-heading" className={styles.srOnly}>
          Employee Information Form
        </h2>

        <div className={styles.inputContainer}>
          <label className={styles.label} htmlFor="firstName">
            First Name
          </label>
          <input
            className={styles.input}
            id="firstName"
            type="text"
            value={employee.firstName}
            onChange={handleChange}
            required
            aria-required="true"
          />
        </div>

        <div className={styles.inputContainer}>
          <label className={styles.label} htmlFor="lastName">
            Last Name
          </label>
          <input
            className={styles.input}
            id="lastName"
            type="text"
            value={employee.lastName}
            onChange={handleChange}
            required
            aria-required="true"
          />
        </div>

        <div className={styles.inputContainer}>
          <label className={styles.label} htmlFor="birthDate">
            Date of Birth
          </label>
          <Calendar
            id="birthDate"
            value={employee.birthDate}
            onChange={handleChange}
            required
            aria-required="true"
          />
        </div>

        <div className={styles.inputContainer}>
          <label className={styles.label} htmlFor="startDate">
            Start Date
          </label>
          <Calendar
            id="startDate"
            value={employee.startDate}
            onChange={handleChange}
            required
            aria-required="true"
          />
        </div>

        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Address</legend>

          <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor="address">
              Street
            </label>
            <input
              className={styles.input}
              id="address"
              type="text"
              value={employee.address}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </div>

          <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor="city">
              City
            </label>
            <input
              className={styles.input}
              id="city"
              type="text"
              value={employee.city}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </div>

          <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor="state">
              State
            </label>
            <SelectInput
              id="state"
              value={employee.state}
              onChange={handleChange}
              options={states}
              placeholder="Select State"
              required
            />
          </div>

          <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor="zipCode">
              Zip Code
            </label>
            <input
              className={styles.input}
              id="zipCode"
              type="number"
              value={employee.zipCode}
              onChange={handleChange}
              required
              aria-required="true"
              inputMode="numeric"
              pattern="[0-9]*"
            />
          </div>
        </fieldset>

        <div className={styles.inputContainer}>
          <label className={styles.label} htmlFor="department">
            Department
          </label>
          <SelectInput
            id="department"
            value={employee.department}
            onChange={handleChange}
            options={departments}
            placeholder="Select Department"
            required
          />
        </div>

        <button
          type="submit"
          className={styles.button}
          aria-label="Save employee information"
        >
          Save
        </button>
      </form>

      {/* Success modal shown after employee creation */}
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Success!" closeText="Close">
        <p>{successMessage}</p>
      </Modal>
    </div>
  );
}

export default memo(CreateEmployee);
