import React from 'react'

function documentTitile({title, onTitleChange}){
    return(
        <input 
        type='text'
        value={title}
        onChange={(e) =>onTitleChange(e.target.value)}
        className="document-title"
        />
    );
}

export default documentTitile;