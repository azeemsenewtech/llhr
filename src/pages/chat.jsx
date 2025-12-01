// src/pages/Chat.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { socket } from "../socket/socket";

export default function Chat() {
  const { id: receiverId } = useParams();
  const userId = localStorage.getItem("userId");

  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    socket.connect();

    socket.emit("joinUser", userId);

    socket.on("receiveMessage", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    const msgObj = {
      senderId: userId,
      receiverId,
      message: text,
    };

    socket.emit("sendMessage", msgObj);

    setMessages((prev) => [...prev, msgObj]);
    setText("");
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Chat</h2>

      <div style={{ border: "1px solid #ccc", height: 300, padding: 10, overflowY: "scroll" }}>
        {messages.map((m, i) => (
          <p
            key={i}
            style={{
              textAlign: m.senderId === userId ? "right" : "left",
            }}
          >
            {m.message}
          </p>
        ))}
      </div>

      <br />

      <input
        placeholder="Type message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: 10, width: 300 }}
      />

      <button onClick={sendMessage} style={{ padding: 10, marginLeft: 10 }}>
        Send
      </button>
    </div>
  );
}
