import React, { useState, useEffect } from "react";

import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"));
import "react-quill/dist/quill.snow.css";

function TextArea() {
  const wss = new WebSocket("ws://localhost:2048");

  wss.addEventListener("open", () => {
    console.log("Connected to backend websocket");
  });

  wss.addEventListener("message", (data) => {
    console.log(`Received ${data} from backend`);
  });

  wss.addEventListener("close", () => {
    console.log("Closing websocket connection to backend");
  });

  const [value, setValue] = useState("");
  const modules = {
    toolbar: false,
  };

  return (
    <div className="w-percent_80 shadow-md">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules}
      />
    </div>
  );
}

export default TextArea;
