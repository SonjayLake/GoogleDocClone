import React, { useState, useEffect } from "react";

import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"));
import "react-quill/dist/quill.snow.css";

function TextArea() {
  const wss = new WebSocket("ws://localhost:2048");

  function stripHTMLTags(htmlString) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    return doc.body.textContent || "";
  }

  const [value, setValue] = useState("");
  const modules = {
    toolbar: false,
  };

  return (
    <div className="w-percent_80 shadow-md">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={(e) => {
          setValue(e);
          const parsedString = stripHTMLTags(e);

          wss.send(parsedString);
        }}
        modules={modules}
      />
    </div>
  );
}

export default TextArea;
