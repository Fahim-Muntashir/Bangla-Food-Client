import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import SignInLayout from "../layout/SignInLayout";
import Login from "../pages/Login/Login/Login";
import SignUp from "../pages/Login/SignUp/SignUp";
import ChefDetail from "../pages/ChefDetail/ChefDetail";
import Detail from "../layout/Detail";
import NotFound from "../pages/NotFound/NotFound";

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
  {
    path: "detail",
    element: <Detail></Detail>,
    children: [
      {
        path: ":id",
        element: <ChefDetail></ChefDetail>,
        loader: ({ params }) =>
          fetch(
            `https://chef-hunter-server-fahimmuntashir1.vercel.app/categories/${params.id}`
          ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
export default router;
