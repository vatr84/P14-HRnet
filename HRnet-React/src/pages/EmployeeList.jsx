import { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { selectEmployees } from "../store/employeesSlice";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";
import styles from "./EmployeeList.module.css";

export function EmployeeList() {
  const employees = useSelector(selectEmployees);
  const [globalFilter, setGlobalFilter] = useState("");

  const columns = useMemo(
    () => [
            {
        header: "First Name",
        accessorKey: "firstName",
      },
      {
        header: "Last Name",
        accessorKey: "lastName",
      },
      {
        header: "Hire Date",
        accessorKey: "hireDate",
      },
      {
        header: "Department",
        accessorKey: "department",
      },
      {
        header: "Date of Birth",
        accessorKey: "birthDate",
      },
      {
        header: "Address",
        accessorKey: "address",
      },
      {
        header: "City",
        accessorKey: "city",
      },
      {
        header: "State",
        accessorKey: "state",
      },
      {
        header: "Zip Code",
        accessorKey: "zipCode",
      },
    ],
    []
  );

  const table = useReactTable({
    data: employees,
    columns,
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
  });

  return (
    <div className={styles.tableContainer}>
      <h1>Current Employees</h1>

      <input
        className={styles.searchInput}
        value={globalFilter ?? ""}
        onChange={(e) => setGlobalFilter(e.target.value)}
        placeholder="Search all columns..."
      />

      {employees.length === 0 ? (
        <p>No employees found. Please add employees from the home page.</p>
      ) : (
        <table className={styles.styledTable}>
          <thead className={styles.tableHeader}>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className={styles.tableHeaderCell}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {{ asc: " 🔼", desc: " 🔽" }[header.column.getIsSorted()] ?? ""}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className={styles.tableRow}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className={styles.tableCell}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className={styles.pagination}>
        <div>
          <select
            className={styles.pageSizeSelector}
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>

        <span>
          Page{" "}
          <strong>
            {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
          </strong>
        </span>

        <div>
          <button
            className={styles.pageButton}
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            {"<<"}
          </button>
          <button
            className={styles.pageButton}
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {"<"}
          </button>
          <button
            className={styles.pageButton}
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {">"}
          </button>
          <button
            className={styles.pageButton}
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            {">>"}
          </button>
        </div>
      </div>
    </div>
  );
}
           
