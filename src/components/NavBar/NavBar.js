import React from 'react'
import './NavBar.scss'

import {NavLink} from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="NavBar">
            <ul className="NavBar__list">
                <li>
                    <NavLink to="/serves">Услуги</NavLink>
                </li>
                <li>
                    <NavLink to="/documents">Необходимые документы</NavLink>
                </li>
                <li>
                    <NavLink to="/question">Вопросы</NavLink>
                </li>
                <li>
                    <NavLink to="/contacts">Контакты</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar