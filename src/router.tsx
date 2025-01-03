import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Mycreations from "./components/Mycreations/Mycreations";
import Favoris from "./components/Favoris/Favoris";

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
      {
        path: "Favoris",
        element: <Favoris />,
      },
    ],
  },
]);

export default router;
