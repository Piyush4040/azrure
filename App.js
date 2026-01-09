import React, { useState } from "react";

export default function App() {
  const [text, setText] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-2 text-center">
          React Frontend (No Backend)
        </h1>
        <p className="text-gray-600 mb-4 text-center">
          This is a standalone React frontend application.
        </p>

        <input
          type="text"
          placeholder="Type something..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full border rounded-xl px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="text-sm text-gray-700 mb-4">
          <strong>Live Preview:</strong> {text || "Nothing typed yet"}
        </div>

        <button
          onClick={() => setText("")}
          className="w-full px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Clear Text
        </button>
      </div>
    </div>
  );
}
