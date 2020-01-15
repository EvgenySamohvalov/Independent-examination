import React from 'react'


import './Header.scss'
import NavBar from '../NavBar/NavBar'
import OrderButton from '../OrderButton/OrderButton'
import { Logo } from '../Logo/Logo'



const Header = () => {
    return (
        <div className="Header">
            <Logo />
            <NavBar />
            <OrderButton name="Ну Закажи!!"/>
        </div>
    )
}

export default Header