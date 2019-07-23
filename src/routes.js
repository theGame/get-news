import Root from "./route/Root";
import { CreateUrl, UrlList } from "./route";
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
        component: UrlList
      }
    ]
  }
];

export default routes;