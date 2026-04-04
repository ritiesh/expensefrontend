import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate("/");
  };

  return (
  <nav className="bg-white/90 backdrop-blur-md shadow-md px-4 md:px-8 py-3 flex justify-between items-center sticky top-0 z-50">

    {/* Logo */}
    <h1 className="text-2xl font-bold text-blue-600 tracking-wide">
      💰 Expense Tracker
    </h1>

    {/* Desktop Menu */}
    <div className="hidden md:flex gap-6 items-center text-gray-700 font-medium">
      <Link
        to="/dashboard"
        className="hover:text-blue-600 transition duration-200"
      >
        Dashboard
      </Link>

      <Link
        to="/add"
        className="hover:text-blue-600 transition duration-200"
      >
        Add Expense
      </Link>

      <Link
        to="/chat"
        className="hover:text-blue-600 transition duration-200"
      >
        Chat
      </Link>

      <button
        onClick={logout}
        className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 active:scale-95 transition duration-200 shadow"
      >
        Logout
      </button>
    </div>

    {/* Mobile Menu Button */}
    <button
      className="md:hidden text-2xl text-gray-700"
      onClick={() => setOpen(!open)}
    >
      ☰
    </button>

    {/* Mobile Menu */}
    {open && (
      <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center gap-5 py-6 md:hidden rounded-b-2xl">

        <Link
          to="/dashboard"
          onClick={() => setOpen(false)}
          className="text-lg text-gray-700 hover:text-blue-600 transition"
        >
          Dashboard
        </Link>

        <Link
          to="/add"
          onClick={() => setOpen(false)}
          className="text-lg text-gray-700 hover:text-blue-600 transition"
        >
          Add Expense
        </Link>

        <Link
          to="/chat"
          onClick={() => setOpen(false)}
          className="text-lg text-gray-700 hover:text-blue-600 transition"
        >
          Chat
        </Link>

        <button
          onClick={logout}
          className="bg-red-500 text-white px-5 py-2 rounded-xl hover:bg-red-600 active:scale-95 transition shadow"
        >
          Logout
        </button>
      </div>
    )}
  </nav>
);
}