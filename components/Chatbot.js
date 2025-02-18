"use client";

import React, { useState, useEffect } from "react";
import { marked } from "marked";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi, I’m Hana, Shreyash’s personal job-hunting agent. What brings you here today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [sessionId, setSessionId] = useState("");

  useEffect(() => {
    const uniqueSessionId = `session_${Date.now()}_${Math.random()
      .toString(36)
      .slice(2, 11)}`;
    setSessionId(uniqueSessionId); // Store the session ID
  }, []);

  function formatMessageWithMarkdown(content) {
    return marked(content); // Converts Markdown to HTML
  }

  const handleSend = async () => {
    if (!input) return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", content: input },
    ]);
    setInput(""); // Clear input field

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HANA_AI_ROUTE}/query`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ session_id: sessionId, question: input }),
      }
    );
    const data = await response.json();

    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "assistant", content: data.response },
    ]);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevents form submission or newlines
      handleSend();
    }
  };

  return (
    <div className="md:w-1/2 h-[40vh] md:h-full bg-white p-8 flex flex-col text-xs sm:text-base justify-between text-gray-400">
      <div className="overflow-y-auto h-full">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-4 ${
              msg.role === "user" ? "text-right" : "text-left"
            }`}
          >
            <div
              className={`inline-block p-2 rounded-lg ${
                msg.role === "user" ? "bg-blue-100" : "bg-gray-200"
              }`}
              style={{ whiteSpace: "pre-wrap" }}
              dangerouslySetInnerHTML={{
                __html: formatMessageWithMarkdown(msg.content),
              }}
            ></div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex">
        <input
          type="text"
          className="border border-gray-300 rounded-l-lg p-2 w-full"
          placeholder="Type your question here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress} // Handle "Enter" key press
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white rounded-r-lg p-2"
        >
          Send
        </button>
      </div>
    </div>
  );
}
