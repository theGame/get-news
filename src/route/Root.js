import React from "react";
import { renderRoutes } from "react-router-config";
import { NotificationMessage } from "./../common";

const Root = ({ route }) => (
  <section id="news-parser">
    <NotificationMessage />
    {renderRoutes(route.routes)}
  </section>
);

export default Root;