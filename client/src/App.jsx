import "./App.css";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from "react-router-dom";

// Pages
import Home from "./pages/home/Home";
import Error404 from "./pages/error/Error404";

// Layout
import RouteLayout from "./layouts/RouteLayout.jsx";

// Snackbar
import { SnackbarProvider } from 'notistack';

// Create routes
const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouteLayout />}>
      <Route index element={<Home />} />
      <Route path="*" element={<Error404 />} />
    </Route>
  )
);

function App() {
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
    >
      <RouterProvider router={routes} />
    </SnackbarProvider>
  );
}

export default App;
