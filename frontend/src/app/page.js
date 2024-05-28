"use client";
import RootLayout from "./layout";
import DocumentTitle from "./components/document/DocumentTitle";
import Toolbar from "./components/document/Toolbar";
import TextArea from "./components/document/TextArea";
import LoginForm from "./components/document/LoginForm";

export default function Home() {
  return (
    <RootLayout>
      <LoginForm />
      <div className="flex flex-col items-center">
        <DocumentTitle />
        <Toolbar />
        <TextArea />
      </div>
    </RootLayout>
  );
}
