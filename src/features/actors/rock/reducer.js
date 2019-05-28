import { RockTemp } from '../index'

const newRock = new RockTemp(40,40, false)
const initialState = {
    rocks: [ newRock ]
}

const rockReducer = (state = initialState, action ) => {
    console.log( newRock )
    switch(action.type){
        default : return state
    }
}

export default rockReducer