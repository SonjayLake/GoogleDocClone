"use client";

import DocumentTitle from "./components/document/DocumentTitle";
import Toolbar from "./components/document/Toolbar";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center">
        <DocumentTitle />
        <Toolbar />
      </div>
    </>
  );
}
