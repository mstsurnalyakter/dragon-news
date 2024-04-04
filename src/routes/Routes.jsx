import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";

 const router = createBrowserRouter([
   {
     path: "/",
     element: <Root />,
     children: [
       {
         path: "/",
         element: <Home />,
       },
       {
         path: "/login",
         element: <Login />,
       },
       {
         path: "/register",
         element: <Login />,
       },
     ],
   },
 ]);

export default router;