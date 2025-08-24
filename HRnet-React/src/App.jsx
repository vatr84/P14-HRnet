import React from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes/Router";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

/**
 * App component
 * Root component that provides Redux, persistence, and routing for the application.
 *
 * @returns {JSX.Element} The rendered app
 */
export function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  );
}

