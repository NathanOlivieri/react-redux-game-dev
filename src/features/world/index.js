import React from 'react'
import Player from '../player'
import Map from '../map'
import Rock from '../actors/rock/Rock'

export default function world() {
    return (
        <div
        style={{
            position: 'relative',
            margin: '20px auto',
            width: '800px',
            height: '400px'
        }}>
            <Player />
            <Map />
            <Rock />
        </div>
    )
}
