import React from 'react';


const UserInfo = ({info}) => {
    return (
        <div className="nes-container my-3 col-11 is-dark with-title">

            <span className="title">User Info</span>

            <p>Nickname: {info.nickname}</p>

            <p>Name: {info.name}</p>

            <p>Email: {info.email}</p>

        </div>
    );
}

export default UserInfo;

