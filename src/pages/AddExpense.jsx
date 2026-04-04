import { useDispatch } from "react-redux";
import { addExpense } from "../features/expenseSlice";
import { useState } from "react";

export default function AddExpense() {

    const dispatch = useDispatch();
    const [form, setForm] = useState({ amount: "", description: "" });
    const [message, setMessage] = useState("");

    const userId = localStorage.getItem("userId");

    const handleSubmit = async () => {
  try {
    await dispatch(addExpense({ userId, data: form })).unwrap();

    setMessage("✅ Expense added successfully!");

    // 🔥 Clear form
    setForm({
      amount: "",
      description: "",
      category: "",
    });

  } catch (err) {
    setMessage("❌ Failed to add expense");
  }
};

    return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200 px-4">

    <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md">

      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
        Add Expense 💸
      </h2>

      <input
        className="w-full p-3 border border-gray-300 mb-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        placeholder="Amount (₹)"
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
      />

      <input
        className="w-full p-3 border border-gray-300 mb-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        placeholder="Description"
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />

      <select
        className="w-full p-3 border border-gray-300 mb-5 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      >
        <option value="">Select Category</option>
        <option value="Food">Food 🍔</option>
        <option value="Travel">Travel ✈️</option>
        <option value="Shopping">Shopping 🛍️</option>
        <option value="Bills">Bills 💡</option>
        <option value="Other">Other</option>
      </select>

      <button
        onClick={() => handleSubmit()}
        className="w-full bg-blue-500 text-white p-3 rounded-xl font-semibold hover:bg-blue-600 active:scale-95 transition duration-200 shadow-md"
      >
        Add Expense
      </button>
        {message && (
  <p className="text-center mt-3 text-sm font-medium text-green-600">
    {message}
  </p>
)}
    </div>
  </div>
);
}