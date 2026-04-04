import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleRegister = async () => {
    try {
  await API.post("/auth/register", form);
  alert("Registered Successfully!");
  navigate("/");
} catch (err) {
  alert(err.response?.data || "Registration failed");
}
  };

  return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200 px-4">
    
    <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md transition-all">

      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
        Create Account 🚀
      </h2>

      <input
        className="w-full p-3 border border-gray-300 mb-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        className="w-full p-3 border border-gray-300 mb-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        type="password"
        className="w-full p-3 border border-gray-300 mb-5 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button
        onClick={handleRegister}
        className="w-full bg-blue-500 text-white p-3 rounded-xl font-semibold hover:bg-blue-600 active:scale-95 transition duration-200 shadow-md"
      >
        Register
      </button>

      <p className="text-sm text-center mt-5 text-gray-600">
        Already have an account?{" "}
        <button
          className="text-blue-600 font-semibold hover:underline hover:text-blue-700 transition"
          onClick={() => navigate("/")}
        >
          Login
        </button>
      </p>

    </div>
  </div>
);

}