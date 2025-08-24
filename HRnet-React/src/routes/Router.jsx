import { createBrowserRouter } from "react-router";
import CreateEmployee from "../pages/createEmployee/CreateEmployee";
import { EmployeeList } from "../pages/employeeList/EmployeeList";
import { NotFound } from "../pages/notFound/NotFound";
import { Layout } from "../layout/Layout";

/**
 * Application router configuration
 * Defines routes for CreateEmployee, EmployeeList, NotFound, and uses Layout as the main wrapper.
 * Uses react-router's createBrowserRouter for SPA navigation.
 */
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <CreateEmployee />,
      },
      {
        path: "/employee-list",
        element: <EmployeeList />,
      },
      {
        path: "*",
        element: <NotFound />
      }
    ],
  },
]);

export { router };
