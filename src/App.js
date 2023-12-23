import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
// import Users from "./pages/Users";
// import Settings from "./pages/Settings";
import Nav from "./components/Nav";
import Users from "./pages/Users";
import Home from "./pages/Home";

//kyfffjfiyyfjy sandeep

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/users",
      element: <Users />,
    },
  ]);
  return <RouterProvider router={appRouter} />;
};

export default App;
