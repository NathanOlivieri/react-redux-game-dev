import React from 'react'
import { connect } from 'react-redux'
import { RockTemp } from '../../actors/index'


// const rock = new RockTemp()

function Rock(props) {
    console.log(props)
    return (
        <div 
            style={{
                position: 'absolute',
                top: `${props.position[1]}px`,
                left: `${props.position[0]}px`,
                width: props.size.width,
                height: props.size.height,
                background: props.background
                // transition: '100ms'
            }}
        />
    )
}
const mapStateToProps = (state) => {
    return {
        ...state.rock
    }
}

export default connect(mapStateToProps)(Rock)