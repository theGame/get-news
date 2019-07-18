import Root from './route/Root';
import CreateUrl from './route/create/CreateUrl';
import List from './route/list/UrlsList';
import { ROUTES } from "./constants";

const routes = [
  {
    component: Root,
    routes: [
      {
        path: ROUTES.HOME,
        exact: true,
        component: CreateUrl
      },
      {
        path: ROUTES.LIST,
        exact: true,
        component: List
      }
    ]
  }
];

export default routes;