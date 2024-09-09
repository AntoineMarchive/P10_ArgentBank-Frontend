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
  