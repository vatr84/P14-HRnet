import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./DataTable.module.css";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";

/**
 * DataTable component
 * @param {Object[]} data - Array of row data
 * @param {Object[]} columns - Array of column definitions
 * @param {string} emptyMessage - Message to display when no data
 * @param {number[]} pageSizeOptions - Options for page size selection
 * @param {number} defaultPageSize - Default page size
 * @param {boolean} showGlobalFilter - Show global filter input
 * @param {boolean} showPagination - Show pagination controls
 */
export function DataTable({
  data = [],
  columns = [],
  emptyMessage = "No data available",
  pageSizeOptions = [10, 20, 30, 40, 50],
  defaultPageSize = 10,
  showGlobalFilter = true,
  showPagination = true,
}) {
  const [globalFilter, setGlobalFilter] = useState("");

  const table = useReactTable({
    data,
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
        pageSize: defaultPageSize,
      },
    },
  });

  /**
   * DataTable component container
   * Uses scoped CSS for layout and style isolation
   */
  return (
    <div className={styles.tableContainer}>
      {/**
       * Global filter input for accessibility and usability
       */}
      {showGlobalFilter && (
        <input
          value={globalFilter ?? ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search all columns..."
          aria-label="Search all columns"
          className={styles.searchInput}
        />
      )}

      {/**
       * Show an empty message when no data is available
       */}
      {data.length === 0 ? (
        <p className={styles.emptyMessage}>{emptyMessage}</p>
      ) : (
        <table className={styles.table}>
          <thead className={styles.tableHeader}>
            {/**
             * Use semantic <th> and <thead> for accessibility
             */}
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    role="columnheader"
                    aria-sort={
                      header.column.getIsSorted()
                        ? header.column.getIsSorted() === "asc"
                          ? "ascending"
                          : "descending"
                        : "none"
                    }
                    className={styles.tableHeaderCell}
                  >
                    {/**
                     * Custom header rendering with flexRender
                     */}
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {/**
                     * Sort indicators for user feedback
                     */}
                    {{ asc: " 🔼", desc: " 🔽" }[header.column.getIsSorted()] ??
                      ""}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {/**
             * Render only visible rows for performance
             */}
            {table.getRowModel().rows.map((row) => (
              <tr className={styles.tableRow} key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td className={styles.tableCell} key={cell.id}>
                    {/**
                     * Custom cell rendering with flexRender
                     */}
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/**
       * Show pagination controls for large datasets
       */}
      {showPagination && data.length > 0 && (
        <div className={styles.pagination}>
          <div>
            {/**
             * Allow users to select page size
             */}
            <select
              className={styles.pageSizeSelector}
              value={table.getState().pagination.pageSize}
              onChange={(e) => {
                table.setPageSize(Number(e.target.value));
              }}
              aria-label="Rows per page"
            >
              {pageSizeOptions.map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>

          {/**
           * Show current page and total pages
           */}
          <span>
            Page{" "}
            <strong>
              {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </strong>
          </span>

          <div>
            {/**
             * Provide accessible pagination buttons
             */}
            <button
              className={styles.pageButton}
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
              aria-label="First page"
            >
              {"<<"}
            </button>
            <button
              className={styles.pageButton}
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              aria-label="Previous page"
            >
              {"<"}
            </button>
            <button
              className={styles.pageButton}
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              aria-label="Next page"
            >
              {">"}
            </button>
            <button
              className={styles.pageButton}
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
              aria-label="Last page"
            >
              {">>"}
            </button>
          </div>
        </div>
      )}
      {/**
      * Keep component stateless except for UI state (filter, pagination)
      */}
    </div>
  );
}

/**
 * Prop types for validation and maintainability
 */
DataTable.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  emptyMessage: PropTypes.string,
  pageSizeOptions: PropTypes.arrayOf(PropTypes.number),
  defaultPageSize: PropTypes.number,
  showGlobalFilter: PropTypes.bool,
  showPagination: PropTypes.bool,
};