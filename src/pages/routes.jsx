import { Navigate } from "react-router-dom";
import HomePage from "./HomePage";
import PrivacyPage from "./PrivacyPage";

export default [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/privacy",
    element: <PrivacyPage />,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];
