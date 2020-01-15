import React from 'react'
import {NavLink} from 'react-router-dom'

import './Logo.scss'
import logo from '../../image/logo.png'


export const Logo = () => {
    return (
        <React.Fragment>
            <NavLink className="Logo" to="/">
                <img src={logo} alt="logo"/>
            </NavLink>
        </React.Fragment>
    )
}