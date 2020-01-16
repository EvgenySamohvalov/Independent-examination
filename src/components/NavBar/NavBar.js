import React, {Component} from 'react'
import './NavBar.scss'

import {NavLink} from 'react-router-dom'

const navbarItems = [
    {path:'/serves', name:'Услуги'},
    {path:'/documents', name:'Необходимые документы'},
    {path:'/question', name:'Вопросы'},
    {path:'/contacts', name:'Контакты'}
] 

class NavBar extends Component {

    renderLinks() {
        return navbarItems.map((item,index) => {
            return (
            <li key={index} >
                <NavLink 
                    to={item.path}
                    className="NavBar__link" 
                    activeClassName="NavBar__active"
                >
                    {item.name}
                </NavLink>
            </li>
            )
        })
    }   
    
    render() {
        return(
        
            <nav className="NavBar">
                <ul className="NavBar__list">
                    {this.renderLinks()}
                </ul>
            </nav>
        )
    }
}

export default NavBar