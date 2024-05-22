import React, { useState } from 'react';
import Toolbar from './toolBar';
import TextArea from './textArea';


function App() {
  const [content, setContent] = useState('');

  const handleShare = () => {
    console.log('Share button clicked');
    // Here to handle sharing
  };

  return (
    <div className="app-container">
      <Toolbar onUndo={() => {}} onRedo={() => {}} onSave={() => {}} onShare={handleShare} />
      <TextArea content={content} onContentChange={setContent} />
    </div>
  );
}

export default App;
