import styles from "./CreateEmployee.module.css";
import { states } from "../data/states";

export function CreateEmployee() {
  return (
    <div className={styles.pageContainer}>
      <h1>Create Employee</h1>
      <form className={styles.form}>
        <div className={styles.inputContainer}>
          <label htmlFor="firstName" className={styles.label}>First Name</label>
          <input id="firstName" type="text" className={styles.input} />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="lastName" className={styles.label}>Last Name</label>
          <input id="lastName" type="text" className={styles.input} />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="birthDate" className={styles.label}>Date of Birth</label>
          <input id="birthDate" type="date" className={styles.input} />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="startDate" className={styles.label}>Start Date</label>
          <input id="startDate" type="date" className={styles.input} />
        </div>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Address</legend>
          <div className={styles.inputContainer}>
                       <label htmlFor="address" className={styles.label}>Street</label>
            <input id="address" type="text" className={styles.input} />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="city" className={styles.label}>City</label>
            <input id="city" type="text" className={styles.input} />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="state" className={styles.label}>State</label>
            <select id="state" className={styles.select}>
              <option value="">Select State</option>
              {states.map((state) => (
                <option key={state.abbreviation} value={state.abbreviation}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="zip" className={styles.label}>Zip Code</label>
            <input id="zip" type="number" className={styles.input} />
          </div>
        </fieldset>
        <div className={styles.inputContainer}>
          <label htmlFor="department" className={styles.label}>Departement</label>
          <select id="department" className={styles.select}>
            <option value="">Select Departement</option>
            <option value="Sales">Sales</option>
            <option value="Marketing">Marketing</option>
            <option value="Engineering">Engineering</option>
            <option value="HR">Human Resources</option>
            <option value="Legal">Legal</option>
          </select>
        </div>
        <button className={styles.button}>Save</button>
      </form>
    </div>
  );
}

