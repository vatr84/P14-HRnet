import { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectEmployees } from "../../store/employeesSlice";
import { DataTable } from "../../components/table/DataTable";
import styles from "./EmployeeList.module.css";

export function EmployeeList() {
  const employees = useSelector(selectEmployees);

  const columns = useMemo(
    () => [
      { header: "First Name", accessorKey: "firstName" },
      { header: "Last Name", accessorKey: "lastName" },
      { header: "Start Date", accessorKey: "startDate" },
      { header: "Department", accessorKey: "department" },
      { header: "Date of Birth", accessorKey: "birthDate" },
      { header: "Address", accessorKey: "address" },
      { header: "City", accessorKey: "city" },
      { header: "State", accessorKey: "state" },
      { header: "Zip Code", accessorKey: "zipCode" },
    ],
    []
  );

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>Current Employees</h1>
      <DataTable
        data={employees}
        columns={columns}
        emptyMessage="No employees found. Please add employees from the home page."
        defaultPageSize={10}
        pageSizeOptions={[10, 20, 30, 40, 50]}
        showGlobalFilter={true}
        showPagination={true}
      />
    </div>
  );
}