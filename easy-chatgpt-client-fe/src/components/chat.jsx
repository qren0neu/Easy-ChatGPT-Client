import React, { useState } from "react";
import axios from "axios";

function Chat({ role, generalSettings, roleSettings }) {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async () => {
    try {
      const result = await axios.post("http://localhost:8000/chat/", {
        role,
        settings: { ...generalSettings, ...roleSettings },
        message,
      });
      setResponse(result.data.response);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div>
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={handleSubmit}>Send</button>
      <div>{response}</div>
    </div>
  );
}

export default Chat;
