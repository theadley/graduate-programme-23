import { useState } from "react";
import { Socket } from "socket.io-client";
import "./App.css";

function App({ socket }: { socket: Socket }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  socket.on("message", (arg) => {
    setMessages([...messages, arg]);
  });

  function sendMessage(messageToSend: string) {
    setMessages([...messages, messageToSend]);
    socket.emit("message", messageToSend);
  }

  function handleClick() {
    console.log(message);
    sendMessage(message);
    setMessage("");
  }

  return (
    <>
      {messages?.map((message) => (
        <p key={message}>Message: {message}</p>
      ))}
      <input
        type='text'
        value={message}
        onInput={(event) =>
          setMessage((event.target as HTMLInputElement).value)
        }
      />
      <button onClick={() => handleClick()}>Send</button>
    </>
  );
}

export default App;
