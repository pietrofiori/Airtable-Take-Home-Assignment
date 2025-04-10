import { createBrowserRouter } from "react-router-dom";
import { TimeLine } from "@screens/TimeLine";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <TimeLine />
  }
]);
