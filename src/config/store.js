import { createStore, combineReducers } from 'redux'
import playerReducer from '../features/player/reducer.js'
import rockReducer from '../features/actors/rock/reducer.js';

const rootReducer = combineReducers({
    player: playerReducer,
    rock: rockReducer,
})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store