import React, { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css"; // This imports Quill's default stylesheet

function TextArea() {
  const quillRef = useRef(null);
  const quillInstance = useRef(null); //store the instance

  useEffect(() => {
    if (quillRef.current && !quillInstance.current) {
      new Quill(quillRef.current, {
        theme: "snow", // Specify theme
        modules: {
          toolbar: [
            [{ header: "1" }, { header: "2" }, { font: [] }],
            [{ size: [] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image", "video"],
            ["clean"],
          ],
          clipboard: {
            matchVisual: false,
          },
        },
        placeholder: "Compose an epic...",
        bounds: quillRef.current,
        scrollingContainer: quillRef.current,
      });
    }
  }, []);

  return (
    <div className="text-editor">
      <div ref={quillRef} />
    </div>
  );
}

export default TextArea;
