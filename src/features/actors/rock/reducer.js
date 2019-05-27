import { SPRITE_SIZE } from '../../../config/const'

const initialState = {
    position: [SPRITE_SIZE, SPRITE_SIZE],
    size: {
        width: SPRITE_SIZE,
        height: SPRITE_SIZE
    },
    backgroundPosition: [0, 0],
    isStatic: true,
    background: '#BDC3C7'
}

const rockReducer = (state = initialState, action ) => {
    switch(action.type){
        default : return state
    }
}

export default rockReducer