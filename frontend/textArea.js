import React from 'react'

function textArea({content, onContentChange}){
    return(
        <textarea 
        value={content}
        onChange={(e) =>onContentChange(e.target.value)}
        className="text-area"
        />
    );
}

export default textArea;