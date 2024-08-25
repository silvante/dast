import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLO from "./layouts/MainLO";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLO />}>
        <Route path="/" index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
