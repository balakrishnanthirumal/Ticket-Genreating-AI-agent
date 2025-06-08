// index.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckAuth from "./components/checkAuth.jsx";
import Tickets from "./pages/tickets.jsx";
import Ticket from "./pages/Ticket.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Admin from "./pages/Admin.jsx";
import Layout from "./pages/Layout.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Protected Routes with Navbar */}
        <Route
          element={
            <CheckAuth protectedRoute={true}>
              <Layout />
            </CheckAuth>
          }
        >
          <Route path="/" element={<Tickets />} />
          <Route path="/tickets/:id" element={<Ticket />} />
          <Route path="/admin" element={<Admin />} />
        </Route>

        {/* Public Routes (No Navbar) */}
        <Route
          path="/login"
          element={
            <CheckAuth protectedRoute={false}>
              <Login />
            </CheckAuth>
          }
        />
        <Route
          path="/signup"
          element={
            <CheckAuth protectedRoute={false}>
              <Signup />
            </CheckAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
