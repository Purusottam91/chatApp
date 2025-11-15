"use client";
import { useState, useEffect } from "react";
import { LogOut } from "lucide-react";

export default function Sidebar() {
  const [chats, setChats] = useState([
    { id: 1, name: "General Chat" },
    { id: 2, name: "Friends" },
    { id: 3, name: "Work Group" },
    { id: 4, name: "AI Assistant" },
  ]);

  const [userName, setUserName] = useState(""); // 👈 for showing name

  useEffect(() => {
    // Get user from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserName(parsedUser.name || "User");
    }
  }, []);
  const handleLogout = () => {
    // localStorage.removeItem("token");
    localStorage.removeItem('token');
    window.location.href = '/login';
    // You can clear auth tokens or redirect here

    window.location.href = "/auth/login";
  };

  return (
    <div className="h-screen w-64 bg-gray-900 text-white flex flex-col justify-between shadow-lg">
      {/* Header */}
      <div>
        <div className="p-4 text-xl font-semibold border-b border-gray-700">
          💬 Chat App
        </div>

        {/* Chats List */}
        <div className="p-2 flex-1 overflow-y-auto">
          {chats.map((chat) => (
            <button
              key={chat.id}
              className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              {chat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Footer - Logout */}
      <div className="p-4 border-t border-gray-700 flex items-center justify-between">
        <span className="text-sm text-gray-400">{userName}</span>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-600 px-3 py-1 rounded-lg text-sm hover:bg-red-700 transition"
        >
          <LogOut size={16} />
          Logout
        </button>
      </div>
    </div>
  );
}
