import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./style.css";

import Home from "./Bikestore/home.jsx";
import Viewbikes from "./Bikestore/viewbikes.jsx";
import AddBike from "./Bikestore/addbike.jsx";
import EditBike from "./Bikestore/editbike.jsx";

// Layout Component
function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { 
    path: "/bikestore/view", 
    element: <Viewbikes />
  },
  { 
    path: "/bikestore/add", 
    element: <AddBike />
  },
  { path: "/bikestore/edit/:id", 
    element: <EditBike />
   },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
