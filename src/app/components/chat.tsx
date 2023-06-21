import { useState, FormEvent } from "react";
import axios from "axios";
import questions from "../../../question.json";
export default function Home() {
  const [messages, setMessages] = useState<any>([]);
  const [inputMessage, setInputMessage] = useState("");

  const handleMessageSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputMessage.trim() === "") {
      return;
    }

    const newMessage = { content: inputMessage, sender: "user" };

    setMessages([...messages, newMessage]);
    setInputMessage("");
    boot(newMessage);
  };
  async function boot(newMessage: any) {
    const question = questions;

    let result = question.questions.find(
      (obj) => obj.question === newMessage.content
    );
    let answer;
    if (!result) answer = "I Canot understand";
    else answer = result.answer;
    const chatGptMessage = {
      content: answer,
      sender: "chatgpt",
    };

    setMessages([...messages, chatGptMessage]);
  }

  return (
    <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-4">
      <div className="space-y-4 max-h-24 overflow-auto max-w-40">
        {messages.map((message: any, index: any) => (
          <div
            key={index}
            className={message.sender === "user" ? "text-right" : "text-left"}
          >
            <span className="font-bold">{message.sender}</span>
            <p
              className="w-full p-3 rounded-lg inline-block"
              style={{ wordWrap: "break-word" }}
            >
              {message.content}
            </p>
          </div>
        ))}
      </div>

      <form className="mt-4" onSubmit={handleMessageSubmit}>
        <input
          type="text"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
          placeholder="Type your message..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button
          type="submit"
          className="w-full mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
        >
          Send
        </button>
      </form>
    </div>
  );
}
