import React from 'react';

function toolBar({ onUndo, onRedo, onSave, onShare, onTextChange, currentText, username }) {
    //generate avatar based on username
    //const avatarStyle = 'pixel-art'; // Or any other style like 'bottts', 'micah', etc.
    //const avatarUrl = `https://api.dicebear.com/v8/${encodeURIComponent(avatarStyle)}/${encodeURIComponent(username)}.svg`;
   const avatarUrl = `https://api.dicebear.com/8.x/pixel-art/svg`;
    return (
    <div className="toolbar">
      <input 
        type="text" 
        value={currentText} 
        onChange={(e) => onTextChange(e.target.value)} 
        placeholder="Document Title Here"
        className="document-title"
      />
      <div className="toolbar-buttons">
        <button onClick={onUndo}>Undo</button>
        <button onClick={onRedo}>Redo</button>
        <button onClick={onSave}>Save</button>
        <button onClick={onShare}>Share</button>
        <img 
          src={avatarUrl}
          alt="User Icon" 
          className="user-icon"
        /> 
        
      </div>
    </div>
  );
}


export default toolBar;
