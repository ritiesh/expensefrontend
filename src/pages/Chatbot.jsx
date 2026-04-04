import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../features/chatSlice";
import { useState } from "react";

export default function Chatbot() {

  const dispatch = useDispatch();
  const response = useSelector((s) => s.chat.response);

  const [question, setQuestion] = useState("");
  const userId = localStorage.getItem("userId");

  return (
  <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex justify-center items-center p-4">

    <div className="bg-white w-full max-w-lg h-[80vh] rounded-3xl shadow-xl flex flex-col p-4">

      {/* Header */}
      <h2 className="text-xl font-bold text-blue-600 text-center mb-3">
        AI Assistant 🤖
      </h2>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto space-y-3 p-2">

        {/* User Message */}
        {question && (
          <div className="flex justify-end">
            <div className="bg-blue-500 text-white px-4 py-2 rounded-2xl max-w-xs">
              {question}
            </div>
          </div>
        )}

        {/* AI Response */}
        {response && (
          <div className="flex justify-start">
            <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded-2xl max-w-xs">
              {response}
            </div>
          </div>
        )}

      </div>

      {/* Input Area */}
      <div className="flex gap-2 mt-3">
        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask something..."
          className="flex-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          onClick={() => dispatch(sendMessage({ userId, question }))}
          className="bg-blue-500 text-white px-4 rounded-xl hover:bg-blue-600 active:scale-95 transition"
        >
          Send
        </button>
      </div>

    </div>
  </div>
);
}