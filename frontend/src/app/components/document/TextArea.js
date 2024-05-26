import React, { useState } from "react";

import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"));
import "react-quill/dist/quill.snow.css";

function TextArea() {
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
