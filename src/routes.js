import React from "react";
import { Navigate } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import Profile from "./Profile";
import ProducDetails from "./producDetails";

export const authRoutes = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/about",
    componet: <About />,
  },
  {
    path: "/contact",
    componet: <Contact />,
  },
  {
    path: "/profile",
    component: <Profile />,
  },
  {
    path:"/producDetails/:producId",
    component: <ProducDetails />,
  }
];

export const nonAuthRoutes = [
  {
    path: "/login",
    component: <Login />,
  },
];

export const ProtectedRoute = ({ children }) => {
  const loggedInUser = localStorage.getItem("fakeUser");

  if (!loggedInUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export const NonAuthRoute = ({ children }) => {
  const loggedInUser = localStorage.getItem("fakeUser");

  if (loggedInUser) {
    return <Navigate to="/profile" replace />;
  }

  return children;
};
