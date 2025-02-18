import React from "react";
import Portfolio from "@/components/Portfolio";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <div className="flex h-screen flex-col md:flex-row ">
      {/* Left Portfolio Section */}
      <Portfolio />

      {/* Right Chatbot Section */}
      <Chatbot />
    </div>
  );
}
