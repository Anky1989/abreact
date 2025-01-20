import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import ContactUs from "./components/ContactUs";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
    ],
    // errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={BrowserRouter} />);
