import React, { useState } from "react";

import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"));
import "react-quill/dist/quill.snow.css";

function TextArea() {
  const [value, setValue] = useState("");

  return <ReactQuill theme="snow" value={value} onChange={setValue} />;
}

export default TextArea;
