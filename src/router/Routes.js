import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import SignInLayout from "../layout/SignInLayout";
import Login from "../pages/Login/Login/Login";
import SignUp from "../pages/Login/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/login",
    element: <SignInLayout></SignInLayout>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/login/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
export default router;
