import React from 'react'
import { connect } from 'react-redux'

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
                background: props.background,
                // transition: '100ms'
            }}
        />
    )
}
const mapStateToProps = (state, ownProps) => {
    return {
        ...state.rock.rocks[0],
        ...ownProps
    }
}

export default connect(mapStateToProps)(Rock)