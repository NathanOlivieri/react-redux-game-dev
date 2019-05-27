import store  from '../../config/store'
import { SPRITE_SIZE, MAP_HEIGHT, MAP_WIDTH } from '../../config/const'

export default function handleMove(player) {

    const observeBoundaries = (oldPos, newPos) => {
       return ((newPos[0] >= 0 && newPos[0] <= MAP_WIDTH - SPRITE_SIZE) && 
               (newPos[1] >= 0 && newPos[1] <= MAP_HEIGHT - SPRITE_SIZE)) 
               ? newPos : oldPos
    }

    const observeObstacle = (oldPos, newPos) => {
        const rockPos = store.getState().rock.position
        return (newPos[0] === rockPos[0] && newPos[1] === rockPos[1] )
        ? oldPos : newPos
    }

    const getNewPosition = (direction) => {
        const oldPos = store.getState().player.position
        switch(direction){
            case 'WEST':       
             return [oldPos[0]-SPRITE_SIZE, oldPos[1]]

            case 'EAST':       
             return [oldPos[0]+SPRITE_SIZE, oldPos[1]]

            case 'NORTH':       
             return [oldPos[0], oldPos[1]-SPRITE_SIZE]

            case 'SOUTH':
             return [oldPos[0], oldPos[1]+SPRITE_SIZE]

            default:
                console.log(direction)
        }
    }

    const getNewSprite = (direction) => {
        const oldBg = store.getState().player.backgroundPosition
        // const currentDirection = store.getState().player.currentDirection
        switch(direction){
            case 'WEST':
                return [SPRITE_SIZE*2, oldBg[1]+SPRITE_SIZE]

            case 'EAST':
                return [SPRITE_SIZE*5, oldBg[1]+SPRITE_SIZE]

            case 'NORTH':
                return [SPRITE_SIZE*3, oldBg[1]+SPRITE_SIZE]

            case 'SOUTH':
                return [0, oldBg[1]+SPRITE_SIZE]

            default :
                return [0, 0]
        }
    }

    const dispatchMove = (direction) => {
        const oldPos = store.getState().player.position
        store.dispatch({
            type:'MOVE_PLAYER',
            payload: {
                position: observeBoundaries(oldPos, observeObstacle(oldPos, getNewPosition(direction))),
                backgroundPosition: getNewSprite(direction),
                currentDirection: direction
            }
        })
    }

    const handleKeyDown = (e) => {
        e.preventDefault()
        switch(e.keyCode) {
            case 37: 
                return dispatchMove('WEST')

            case 38: 
                return dispatchMove('NORTH')

            case 39: 
                return dispatchMove('EAST')

            case 40: 
                return dispatchMove('SOUTH')

            default:
                console.log(e.keyCode)
        }
    }

    window.addEventListener('keydown', (e) => {
        handleKeyDown(e)
    })

    return player
}