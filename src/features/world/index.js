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
            { generateRocks(10) }
        </div>
    )
}

const generateRocks = (amount) => {
    let rockList = []
    for(let i = 1; i <= amount; i++){
        rockList.push(i)
    }
    let rockMap = rockList.map(item => (
        <Rock position={[getRandomPos(), getRandomPos()]} key={item} />
    ))
    return rockMap
}

const getRandomPos = () => {
    let newInt = parseInt(Math.random()*10) * 40
    return newInt
}