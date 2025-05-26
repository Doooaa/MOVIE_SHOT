import React from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import HomePage from "../pages/homePage";
import AboutPage from "../pages/AboutPage";
import SearchPage from "../pages/searchPage";
import DetailsPage from "../pages/DetailsPage";
import NotFoundPage from "../pages/NotFoundPage";
import LayoutPage from "../pages/layoutPage";
import ContextProvider from "../contextApi/contextProvider";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "/about", element: <AboutPage /> },
        { path: "/search", element: <SearchPage/> },
        { path: "/movie/:id", element: <DetailsPage /> },
        { path: "/DetailsPage", element: <DetailsPage /> },
      ],
    },
    { path: "*", element: <NotFoundPage/> },
  ]);
  return (
    <>
      <ContextProvider> 
        {/* provide data for all children ✅ */}
          <RouterProvider router={router}></RouterProvider>
      </ContextProvider>
    </>
  );
};

export default App;
