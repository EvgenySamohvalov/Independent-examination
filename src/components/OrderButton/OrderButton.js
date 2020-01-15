import React from 'react'
import './OrderButton.scss'
import { NavLink } from 'react-router-dom'

const OrderButton = (props) => <NavLink to="/order" className="OrderButton">{props.name}</NavLink>



export default OrderButton