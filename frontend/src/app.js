import React, { useState, useEffect } from "react";
import Toolbar from "./toolBar";
import TextArea from "./textArea";

function App() {
  const [content, setContent] = useState("");
  const ws = new WebSocket("ws://localhost:2048");

  ws.addEventListener("open", function () {
    console.log("Connected from frontend");
    ws.send("Ping!");
  });

  ws.addEventListener("message", (data) => {
    console.log(data);
  });
  useEffect(() => {});
  const handleShare = () => {
    console.log("Share button clicked");
    // Here to handle sharing
  };

  return (
    <div className="app-container">
      <Toolbar
        onUndo={() => {}}
        onRedo={() => {}}
        onSave={() => {}}
        onShare={handleShare}
      />
      <TextArea content={content} onContentChange={setContent} />
    </div>
  );
}

export default App;
