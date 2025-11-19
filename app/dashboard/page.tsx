"use client";
import ProtectedRoute from "@/utils/ProtectedRoute";
import Sidebar from "@/components/sidebar";
import ChatBoard from "@/components/chatboard";
import ChatTypeBar from "@/components/Typebar";
import React from "react";

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <div className="flex h-screen">
        
        {/* LEFT SIDEBAR */}
        <Sidebar />

        {/* RIGHT CHAT SECTION */}
        <div className="flex-1 flex flex-col h-full">

          {/* TOP CHAT BOARD */}
          <div className="flex-1 overflow-y-auto">
            <ChatBoard />
          </div>

          {/* BOTTOM TYPE BAR */}
          <div className="border-t">
            <ChatTypeBar
              onSend={(text, file) => {
                console.log("Sending:", text, file);
              }}
            />
          </div>

        </div>

      </div>
    </ProtectedRoute>
  );
}
