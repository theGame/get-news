import Root from './route/Root';
import CreateUrl from './route/create/CreateUrl';
import List from './route/list/List';

const routes = [
  {
    component: Root,
    routes: [
      {
        path: "/",
        exact: true,
        component: CreateUrl
      },
      {
        path: "/list",
        exact: true,
        component: List
      }
    ]
  }
];

export default routes;