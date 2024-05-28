import React from "react";
import dynamic from "next/dynamic";

import DocumentTitle from "@/app/components/document/DocumentTitle";
import Toolbar from "@/app/components/document/Toolbar";
import TextArea from "@/app/components/document/TextArea";
import "@/app/styles/globals.css";

export default function UserDocument() {
  return (
    <div className="flex flex-col items-center bg-blue-background">
      <DocumentTitle />
      <Toolbar />
      <TextArea />
    </div>
  );
}
