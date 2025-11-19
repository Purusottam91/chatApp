"use client";
import { Search, MoreVertical } from "lucide-react";
import { useMemo } from "react";

export default function ChatBoard() {
  const messages = [
    { text: "Watch Kurukshetra on Netflix 🔥", time: "10:00 pm", sender: "other" },
    { text: "Room aajao bhaiya free ho to", time: "10:02 pm", sender: "me" },
  ];

  // 🧠 useMemo Example: compute last message and total messages
  const { lastMessage, totalMessages } = useMemo(() => {
    console.log("useMemo executed"); // runs only when messages change

    return {
      lastMessage: messages[messages.length - 1],
      totalMessages: messages.length,
    };
  }, [messages]); // dependency → recompute only when messages change

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

            {/* 👇 useMemo used output */}
            <p className="text-[10px] text-gray-400">
              {totalMessages} messages • Last: {lastMessage.time}
            </p>
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

      {/* 💬 Chat Area */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="flex flex-col gap-3">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`max-w-[60%] text-white p-2 rounded-lg ${
                msg.sender === "me" ? "self-end bg-green-700" : "self-start bg-gray-700"
              }`}
            >
              <p>{msg.text}</p>
              <p className="text-[10px] text-gray-300 text-right mt-1">{msg.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
