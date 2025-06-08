// components/Layout.jsx
import Navbar from "../components/navbar.jsx";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className="p-4">
        <Outlet />
      </div>
    </>
  );
}
