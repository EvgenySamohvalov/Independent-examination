import React from 'react'
import { YMaps, Map } from 'react-yandex-maps'

export const Maps = () => {
    return (
        <YMaps>
            <div>
                Мы на карте
                <Map defaultState={{ center: [59.56, 30.18], zoom: 10 }} />
            </div>
        </YMaps>
    )
}

