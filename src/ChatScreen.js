import { Avatar } from '@material-ui/core';
import SelectInput from '@material-ui/core/Select/SelectInput';
import React, { useState } from 'react'
import './ChatScreen.css'

function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessage] = useState([
        {
            name: 'Shah Rukh Khan',
            imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg',
            message: 'Hello Bro!!'
        },
        {
            name: 'Shah Rukh Khan',
            imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg',
            message: 'Yo Whats up!!'
        },
        {
            message: 'How are you Sir??'
        }
    ]);

    const handleSend = (event) => {
        event.preventDefault();
        setMessage([...messages, { message: input}]);
        setInput("");
    }
    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp"> You matched with Shah Rukh Khan on 23/05/2021</p>
            {
                messages.map((message) => (
                    message.name ? (
                        <div className="chatScreen__message">   
                            <Avatar className="chatScreen__image" alt={message.message} src={message.imgUrl} />
                            <p className="chatScreen__text">
                                {message.message}
                            </p>
                        </div>
                    ): (
                        <div className="chatScreen__message">   
                            <p className="chatScreen__textUser">
                                {message.message}
                            </p>
                        </div>
                    )

                ))
            }
            <form className="chatScreen__input">
                <input 
                        value={input}
                        onChange = {event => setInput(event.target.value)}
                        className="chatScreen__inputField"
                        placeholder="Type a message..."
                        type="text" />    
                <button onClick={handleSend} className="chatScreen__inputButton"> Send</button>
            </form>
            
        </div>
    )
}

export default ChatScreen
