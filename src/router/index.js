import { createBrowserRouter } from "react-router-dom";

import App from "../pages/layout";
import Home from "../pages/home";
import About from "../pages/about";
import Counter from "../pages/counter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Counter />
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />
      },
    ],
  },
]);

export default router;
