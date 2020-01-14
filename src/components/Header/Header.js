import React from 'react'

import './Header.scss'
import NavBar from '../NavBar/NavBar'
import OrderButton from '../OrderButton/OrderButton'
import logo from '../../image/logo.png'


const Header = () => {
    return (
        <div className="Header">
            <a href="/">
                <img src={logo} alt="logo"/>
            </a>
            <NavBar />
            <OrderButton />
        </div>
    )
}

export default Header