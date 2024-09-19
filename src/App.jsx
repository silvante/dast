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
import Profile from "./pages/Profile";
import Otp from "./pages/Otp";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/";
axios.defaults.withCredentials = true;

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLO />}>
        <Route path="/" index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
