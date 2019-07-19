import React from 'react';
import { renderRoutes } from 'react-router-config';
// todo notification message should be here

const Root = ({ route }) => (
  <section id="news-parser">
    {renderRoutes(route.routes)}
  </section>
);

export default Root;