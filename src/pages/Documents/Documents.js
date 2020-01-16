import React from 'react'

import './Documents.scss'
import documentImg from '../../image/documentImg.jpg'

export const Documents = () => {
    return (
        <div className="Documents">
            <h2 className="Documents__title">
                Необходимые документы
            </h2>
            <div className="Documents__content">
                <ul className="Documents__list">
                    <li>✓ Паспорт гражданина РФ.</li>
                    <li>✓ Cвидетельство о регистрации.</li>
                    <li>✓ Cправка или извещение о ДТП.</li>
                </ul>
                <img className="Documents__img" src={documentImg} alt="Documents"/>
            </div>
        </div>
    )
}