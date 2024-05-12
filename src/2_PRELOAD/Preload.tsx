import { useEffect, useState } from "react";

export const Preload = () => {
  const [message, setMessage] = useState("");
  useEffect(() => {
    window.myPreload.listenChannelMessage(setMessage);
  }, []);
  const handleClick = () => {
    window.myPreload.sendMessage("send message by preload");
  };
  return (
    <div className="App">
      <h1>Recive: {message}</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};
