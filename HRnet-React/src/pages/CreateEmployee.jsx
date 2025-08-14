import styles from "./CreateEmployee.module.css";
import { states } from "../data/states";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../store/employeesSlice";
import { useNavigate } from "react-router";

export function CreateEmployee() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    hireDate: "",
    department: "",
    birthDate: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setEmployee({ ...employee, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEmployee(employee));
    navigate("/employee-list");
  };

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>Create Employee</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <label htmlFor="firstName" className={styles.label}>First Name</label>
                   <input
            id="firstName"
            type="text"
            value={employee.firstName}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="lastName" className={styles.label}>Last Name</label>
          <input
            id="lastName"
            type="text"
            value={employee.lastName}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="birthDate" className={styles.label}>Date of Birth</label>
          <input
            id="birthDate"
            type="date"
            value={employee.birthDate}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="hireDate" className={styles.label}>Start Date</label>
          <input
            id="hireDate"
            type="date"
            value={employee.hireDate}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Address</legend>
          <div className={styles.inputContainer}>
            <label htmlFor="address" className={styles.label}>Street</label>
            <input
              id="address"
              type="text"
              value={employee.address}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="city" className={styles.label}>City</label>
            <input
              id="city"
              type="text"
              value={employee.city}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="state" className={styles.label}>State</label>
            <select
              id="state"
              value={employee.state}
              onChange={handleChange}
              required
              className={styles.select}
            >
              <option value="">Select State</option>
              {states.map((state) => (
                <option key={state.abbreviation} value={state.abbreviation}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="zipCode" className={styles.label}>Zip Code</label>
            <input
              id="zipCode"
              type="number"
                            value={employee.zipCode}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>
        </fieldset>
        <div className={styles.inputContainer}>
          <label htmlFor="department" className={styles.label}>Department</label>
          <select
            id="department"
            value={employee.department}
            onChange={handleChange}
            required
            className={styles.select}
          >
            <option value="">Select Department</option>
            <option value="Sales">Sales</option>
            <option value="Marketing">Marketing</option>
            <option value="Engineering">Engineering</option>
            <option value="HR">Human Resources</option>
            <option value="Legal">Legal</option>
          </select>
        </div>
        <button type="submit" className={styles.button}>Save</button>
      </form>
    </div>
  );
}

