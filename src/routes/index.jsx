import { createBrowserRouter } from "react-router-dom";

import { Login } from "../containers/login";

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
  

]);
