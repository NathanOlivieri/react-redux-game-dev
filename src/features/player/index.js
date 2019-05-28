import React from 'react'
import { connect } from 'react-redux'
import walkSprite from './player_walk.png'
import handleMove from './movement'

function Player(props) {
    return (
        <div 
            style={{
                position: 'absolute',
                top: props.position[1],
                left: props.position[0],
                backgroundImage: `url(${walkSprite})`,
                backgroundPosition: `${props.backgroundPosition[1]}px ${props.backgroundPosition[0]}px`,
                width: '40px',
                height: '40px',
                zIndex:1,
                transition: 'all 300ms, background-position 0ms'
            }}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        ...state.player,
    }
}

export default connect(mapStateToProps)(handleMove(Player))