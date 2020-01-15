import React from 'react'

import './Contacts.scss'
import {Maps} from '../../components/Maps/Maps'

export const Contacts = () => {
    return (
        <div className="Contacts">
            <h2 className="Contacts__title">
                Контакты
            </h2>
            <div>
                <Maps />
            </div>
        </div>
    )
}