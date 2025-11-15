"use client";
import ProtectedRoute from "@/utils/ProtectedRoute";
import Sidebar from "@/components/sidebar";
import ChatBoard from "@/components/chatboard";
import React from "react";

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <div className="flex h-screen ">
        {/* Sidebar (left) */}
        <Sidebar />

      {/* Chat Board (right) */}
      <div className="flex-1">
        <ChatBoard />
      </div>
    </div>
    </ProtectedRoute>
  );
}
