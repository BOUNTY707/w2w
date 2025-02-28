import { Navigate } from "react-router-dom";
import HomePage from "./HomePage";

export default [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];
