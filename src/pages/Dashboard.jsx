import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchDashboard } from "../features/dashboardSlice";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

export default function Dashboard() {
  const dispatch = useDispatch();
  const data = useSelector((s) => s.dashboard.data);

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    dispatch(fetchDashboard(userId));
  }, [dispatch, userId]);

  if (!data) return <p className="text-center mt-10">Loading...</p>;

  // 🔥 Convert Map → Array (ONLY here, UI-level fix)
  const categoryData = Object.keys(data.categoryWise || {}).map((key) => ({
    category: key,
    amount: data.categoryWise[key],
  }));

  const monthlyData = data.monthlyTrend || [];

  const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 p-4 md:p-8">

      {/* 💳 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">

        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500">Total Expense</p>
          <h2 className="text-2xl font-bold text-blue-600">
            ₹{data.totalExpense}
          </h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500">Categories</p>
          <h2 className="text-xl font-semibold text-green-600">
            {Object.keys(data.categoryWise || {}).length}
          </h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500">Months Tracked</p>
          <h2 className="text-xl font-semibold text-purple-600">
            {monthlyData.length}
          </h2>
        </div>

      </div>

      {/* 📊 Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* 🥧 Pie Chart */}
        <div className="bg-white p-6 rounded-2xl shadow flex flex-col items-center">
          <h3 className="mb-4 font-semibold text-gray-700">
            Category Breakdown
          </h3>

          <PieChart width={300} height={300}>
            <Pie
              data={categoryData}
              dataKey="amount"
              nameKey="category"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {categoryData.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

        {/* 📊 Bar Chart */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="mb-4 font-semibold text-gray-700">
            Monthly Spending
          </h3>

          <BarChart width={400} height={300} data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="amount" fill="#3b82f6" />
          </BarChart>
        </div>

      </div>
    </div>
  );
}