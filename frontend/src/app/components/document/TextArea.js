import React, { useState, useEffect, useMemo } from "react";

import dynamic from "next/dynamic";

dynamic(() => import("react-quill/dist/quill.snow.css"));

function TextArea() {
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );

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
    <ReactQuill
      className="w-percent_60 shadow-md bg-white"
      value={value}
      onChange={(e) => {
        setValue(e);
        const parsedString = stripHTMLTags(e);

        wss.send(parsedString);
      }}
      modules={modules}
    />
  );
}

export default TextArea;
