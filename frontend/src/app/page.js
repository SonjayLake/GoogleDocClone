"use client";

import DocumentTitle from "./components/document/DocumentTitle";
import Toolbar from "./components/document/Toolbar";
import TextArea from "./components/document/TextArea";


export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center">
        <DocumentTitle />
        <Toolbar />
        <TextArea />
      </div>
    </>
  );
}
