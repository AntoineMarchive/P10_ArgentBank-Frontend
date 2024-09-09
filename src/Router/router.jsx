import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home.jsx";
import { Error } from "../pages/Error.jsx";
import { Profile } from "../pages/Profile.jsx";
import { Signin } from "../pages/Signin.jsx";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/sign-in",
      element: <Signin />,
    },
    {
      path: "/profil", 
      element: <Profile />,
    },
    {
      path: "*",
      element: <Error />
    }
  ]);
  
  export default router;
  