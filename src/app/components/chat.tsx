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
    console.log(messages);
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
      sender: "boot",
    };
    const userMessage = { content: newMessage.content, sender: "user" };
    const all = [userMessage, chatGptMessage];
    setMessages([...messages, ...all]);
  }

  return (
    <div
      className="mx-auto bg-black bg-opacity-50 rounded-lg shadow-lg p-4 z-40 mb-5 w-2/4"
      style={{
        height: "40%",
      }}
    >
      <div
        className="space-y-4 overflow-auto   text-yellow-300"
        style={{
          height: "85%",
        }}
      >
        {messages.map((message: any, index: any) => {
          return (
            <div
              key={index}
              className={
                message.sender === "user"
                  ? " text-yellow-300 flex  items-center justify-center m-5 mb-0 mt-0"
                  : " text-white flex items-center justify-center m-5 mb-0 mt-0"
              }
            >
              <span
                className={
                  message.sender === "user"
                    ? "font-bold text-yellow-300"
                    : "font-bold"
                }
              >
                [{message.sender}]
              </span>
              <p
                className="w-full p-3 rounded-lg inline-block text-whit "
                style={{ wordWrap: "break-word" }}
              >
                {message.content}
              </p>
            </div>
          );
        })}
      </div>

      <form className="mt-4 mb-0" onSubmit={handleMessageSubmit}>
        <input
          type="text"
          className="w-full px-4 py-2 rounded-lg  bg-transparent border-none outline-none text-white"
          placeholder="Press enter to type your message"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
      </form>
    </div>
  );
}
