import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NewsDetails from "../pages/NewsDetails/NewsDetails";
import PrivateRoute from "./PrivateRoute";

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
         path: "/news/:id",
         element: (
           <PrivateRoute>
             <NewsDetails />
           </PrivateRoute>
         ),
       },
       {
         path: "/login",
         element: <Login />,
       },
       {
         path: "/register",
         element: <Register />,
       },
     ],
   },
 ]);

export default router;