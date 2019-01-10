import React from 'react';
import { renderRoutes } from 'react-router-config';

const Root = ({ route }) => (
  <section id="news-parser">
    {renderRoutes(route.routes)}
  </section>
);

export default Root;