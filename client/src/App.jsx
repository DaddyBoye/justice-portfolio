import { useEffect } from "react";
import "./App.css";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// Pages
import Home from "./pages/home/Home";
import Error404 from "./pages/error/Error404";

// Layout
import RouteLayout from "./layouts/RouteLayout.jsx";

import { ToastContainer } from "react-toastify";
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
  useEffect(() => {
    const timer = setTimeout(() => {
      fetch("https://eyarko-server.onrender.com")
        .then((res) => res.json())
        .then((data) => console.log("Server awake:", data))
        .catch((err) => console.error("Error waking up server:", err));
    }, 2000); // 2-second delay

    return () => clearTimeout(timer); // Cleanup timeout if component unmounts
  }, []);

  return ( 
    <>
      <ToastContainer />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
