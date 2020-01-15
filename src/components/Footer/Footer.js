import React from 'react'
import './Footer.scss'
import { Logo } from '../Logo/Logo'

const Footer = () => {
    return (
        <div className="Footer">
            <Logo />
            <div>
                <p>Санкт-Петербург, ул. Мельничная 21А</p>
                <p>ООО «ЛенАвтоТехника»</p>
                <p>ИНН 7842082536</p>
            </div>
            <div>
                <p>Цены, указанные на сайте, не являются публичной оффертой</p>
                <p>Политика конфиденциальности</p>
                <p>©2020</p>
            </div>

            <div>
                <p>8 (812) 426-74-90</p>
                <p>Imail-lat@mail.ru</p>
            </div>
        </div>
        
    )
}

export default Footer