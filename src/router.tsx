import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Mycreations from "./components/Mycreations/Mycreations";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "About",
        element: <About />,
      },
      {
        path: "Mycreations",
        element: <Mycreations />,
      },
    ],
  },
]);

export default router;
