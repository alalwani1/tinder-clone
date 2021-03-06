import React from 'react'
import './Header.css'
import { IconButton } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link, useHistory } from "react-router-dom";


function Header({ backButton }) {
    const history = useHistory();
    return (
        <div className='header'>
        {backButton? (
            <IconButton onClick={() => history.replace(backButton)}>
            <ArrowBackIosIcon fontSize="large" className="header__icon" />
            </IconButton>
        ) : (
            <IconButton>
            <PersonIcon fontSize="large" className="header__icon" />
            </IconButton>
        )

        }
        
        <Link to="/">
            <img 
                className="header__logo"
                src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-icon.png"
                alt=""></img>
        </Link>
        <Link to="/chat">
            <IconButton>
                <ForumIcon fontSize="large" className="header__icon" />
            </IconButton>
        </Link>
        </div>
    )
}

export default Header
