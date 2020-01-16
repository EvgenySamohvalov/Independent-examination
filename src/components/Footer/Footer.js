import React from 'react'
import './Footer.scss'
import { Logo } from '../Logo/Logo'

const Footer = () => {
    const data = new Date().getFullYear()

    return (
        <div className="Footer">
            <Logo />
            <div>
                <p>Юр. адрес: Санкт-Петербург, ул. Моисеенко, д. 22-А</p>
                <p>ООО «Федеральный экспертный центр «ЛАТ»</p>
                <p>ИНН 7842497700</p>
            </div>
            <div>
                <p>Цены, указанные на сайте, не являются публичной оффертой</p>
                <p>Политика конфиденциальности</p>
                <p>©2018 - ©{data}</p>
            </div>

            <div>
                <p>8 (812) 426-74-90</p>
                <p>Imail-lat@mail.ru</p>
            </div>
        </div>
    )
}

export default Footer