import React from 'react'
import './Chats.css';
import Chat from './Chat.js'

function Chats() {
    return (
        <div className="chats">
            <Chat name="Shah Rukh Khan"
                message="Yoo whats up!!"
                timestamp="40 seconds ago"
                profilePic="https://upload.wikimedia.org/wikipedia/commons/6/6e/Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg"
            ></Chat>
            <Chat name="Salman Khan"
                message="whats up!!"
                timestamp="55 minute ago"
                profilePic="https://upload.wikimedia.org/wikipedia/commons/8/86/Salman_Khan_at_Renault_Star_Guild_Awards.jpg"
            ></Chat>
            <Chat name="Amitabh Bachchan"
                message="Yoo whats up!!"
                timestamp="58 minutes ago"
                profilePic="https://upload.wikimedia.org/wikipedia/commons/c/c6/Indian_actor_Amitabh_Bachchan.jpg"
            ></Chat>
        </div>
    )
}

export default Chats;
