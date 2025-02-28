import React from "react";
import MainLayout from "./MainLayout";
import routes from "../pages/routes";
import routeGenerator from "../utils/routeGenerator";

export default function AppLayout() {
  const pages = routeGenerator(routes);
  return <MainLayout>{pages}</MainLayout>;
}
