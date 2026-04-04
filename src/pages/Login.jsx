import { useDispatch } from "react-redux";
import { loginUser } from "../features/authSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [form, setForm] = useState({ email: "", password: "" });

    const handleLogin = async() => {
        await dispatch(loginUser(form));
        localStorage.setItem("userId", 1); // temp
        navigate("/dashboard");
    };

    return ( <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200">
  <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">

    <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
      Welcome Back 👋
    </h2>

    <input
      className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
      placeholder="Email"
      onChange={(e) => setForm({...form, email: e.target.value})}
    />

    <input
      type="password"
      className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
      placeholder="Password"
      onChange={(e) => setForm({...form, password: e.target.value})}
    />

    <button
      onClick={handleLogin}
      className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
    >
      Login
    </button>

   <p className="text-sm text-center mt-4 text-gray-600">
  Don’t have an account?{" "}
  <button
    className="text-blue-600 font-semibold hover:text-blue-700 hover:underline transition duration-200"
    onClick={() => navigate("/register")}
  >
    Register
  </button>
</p>

  </div>
</div>
    );
}

