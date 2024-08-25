import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLO from "./layouts/MainLO";
import Home from "./pages/Home";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLO />}>
        <Route path="/" index element={<Home />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
