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

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import styles

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
    <>
      <ToastContainer />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
