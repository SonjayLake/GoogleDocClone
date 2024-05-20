import React from 'react'

function toolbar({onUndo, onRedo, onSave, onShare}){
    return(
        <div className="toolbar">
            <button onClick={onUndo}>Undo</button>
            <button onClick={onRedo}>Redo</button>
            <button onClick={onSave}>Save</button>
            <button onClick={onShare}>Share</button>
        </div>
    );
}

export default toolbar;