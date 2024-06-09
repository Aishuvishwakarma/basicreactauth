import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import {
  authRoutes,
  nonAuthRoutes,
  ProtectedRoute,
  NonAuthRoute,
} from "./routes";

function App() {
  const loggedInUser = localStorage.getItem("fakeUser");
  return (
    <div>
      <Router>
        <Header loggedInUser={loggedInUser} />
        <Routes>
          {authRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <ProtectedRoute>
                  {route.component}
                </ProtectedRoute>
              }
            />
          ))}
          {nonAuthRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <NonAuthRoute>
                  {route.component}
                </NonAuthRoute>
              }
            />
          ))}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
