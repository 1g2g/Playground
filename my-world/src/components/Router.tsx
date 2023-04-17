import { createBrowserRouter } from "react-router-dom";
import { Router as RemixRouter } from "@remix-run/router/dist/router";
import { Home } from "routes/Home";
import { SubPage } from "routes/SubPage";
import { TodoPage } from "routes/TodoPage";
interface RouterBase {
  id: number;
  path: string;
  label: string;
  element: React.ReactNode;
}

const routerData: RouterBase[] = [
  {
    id: 0,
    path: "/",
    label: "Home",
    element: <Home />,
  },
  {
    id: 1,
    path: "sub",
    label: "SubPage",
    element: <SubPage />,
  },
  {
    id: 2,
    path: "todo",
    label: "Todo",
    element: <TodoPage />,
  },
];

export const routers: RemixRouter = createBrowserRouter(
  routerData.map((router) => {
    return {
      path: router.path,
      element: router.element,
    };
  })
);
