import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home.jsx";
import { Error } from "../pages/Error.jsx";
import { Profile } from "../pages/Profile.jsx";
import { SignIn } from "../pages/Signin.jsx";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/profile", 
      element: <Profile />,
    },
    {
      path: "*",
      element: <Error />
    }
  ]);
  
  export default router;
  