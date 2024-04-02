import { useState, useEffect } from "react";

export const Ipc = () => {
  const [message, setMessage] = useState("");
  const { ipcRenderer } = window.require("electron");
  useEffect(() => {
    // IPC 이벤트 리스너 등록
    ipcRenderer.on("channel", (event: any, data: string) => {
      setMessage(data); // 받은 메시지를 상태로 설정
    });
  }, [ipcRenderer]);
  const handleClick = () => {
    ipcRenderer.send("channel", "HIHIHIHI");
  };
  return (
    <div className="App">
      <h1>Recive: {message}</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};
