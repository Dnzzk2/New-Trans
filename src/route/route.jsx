import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Ep1 from "../pages/Ep1";
import Ep2 from "../pages/Ep2";
import Ep3 from "../pages/Ep3";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/ep",
    children: [
      {
        path: "/ep/1",
        element: <Ep1 />,
      },
      {
        path: "/ep/2",
        element: <Ep2 />,
      },
      {
        path: "/ep/3",
        element: <Ep3 />,
      },
    ],
  },
]);

export default router;
