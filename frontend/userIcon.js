import React from 'react'

function userIcon({user}){
    return(
        <div className="user-icon">
            <img src={user.avatar} alt="user-icon" />
        </div>
    );
}

export default userIcon;