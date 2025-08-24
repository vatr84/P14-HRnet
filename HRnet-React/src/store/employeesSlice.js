import { createSlice } from "@reduxjs/toolkit";

/**
 * Initial state for employee slice
 * @type {{ employees: Array<object> }}
 */
const initialState = {
  employees: [],
};

/**
 * Employee slice
 * Manages employee data and actions using Redux Toolkit's createSlice.
 */
const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    /**
     * Adds a new employee to the state
     * @param {object} state - Current state
     * @param {object} action - Redux action containing employee payload
     */
    addEmployee(state, action) {
      const newEmployee = {
        ...action.payload,
        id: Date.now().toString(),
      };
      state.employees.push(newEmployee);
    },
  },
});

/**
 * Action creator for adding an employee
 * @function
 */
export const { addEmployee } = employeeSlice.actions;

/**
 * Selector to get employees from state
 * @param {object} state - Redux state
 * @returns {Array<object>} Array of employees
 */
export const selectEmployees = (state) => state.employee.employees;

/**
 * Employee reducer
 * @type {function}
 */
export default employeeSlice.reducer;