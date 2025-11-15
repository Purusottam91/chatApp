"use client";
import { Search, MoreVertical } from "lucide-react";

export default function ChatBoard() {
  return (
    <div className="flex-1 flex flex-col bg-[url('/chat-bg.png')] bg-cover bg-center relative">
      {/* 🔝 Top Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-800 text-white border-b border-gray-700">
        <div className="flex items-center gap-3">
          {/* Profile Photo */}
          <img
            src="https://i.pravatar.cc/40?img=5"
            alt="Profile"
            className="w-10 h-10 rounded-full border border-gray-600"
          />
          {/* Chat Info */}
          <div>
            <h2 className="font-semibold text-sm">Manohar Tulip’s Hero</h2>
            <p className="text-xs text-gray-400">online</p>
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-gray-700 rounded-full">
            <Search size={18} />
          </button>
          <button className="p-2 hover:bg-gray-700 rounded-full">
            <MoreVertical size={18} />
          </button>
        </div>
      </div>

      {/* 💬 Chat Messages Area */}
      <div className="flex-1 overflow-y-auto p-4">
        {/* Example messages */}
        <div className="flex flex-col gap-3">
          {/* Received Message */}
          <div className="max-w-[60%] bg-gray-700 text-white p-2 rounded-lg self-start">
            <p>Watch Kurukshetra on Netflix 🔥</p>
            <p className="text-[10px] text-gray-300 text-right mt-1">10:00 pm</p>
          </div>

          {/* Sent Message */}
          <div className="max-w-[60%] bg-green-700 text-white p-2 rounded-lg self-end">
            <p>Room aajao bhaiya free ho to</p>
            <p className="text-[10px] text-gray-300 text-right mt-1">10:02 pm ✅</p>
          </div>

          {/* More messages can go here */}
        </div>
      </div>
    </div>
  );
}
