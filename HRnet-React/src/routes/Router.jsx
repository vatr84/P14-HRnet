import { createBrowserRouter } from "react-router";
import { CreateEmployee } from "../pages/CreateEmployee";
import { EmployeeList } from "../pages/EmployeeList";
import { NotFound } from "../pages/NotFound";
import { Layout } from "../layout/Layout";

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
